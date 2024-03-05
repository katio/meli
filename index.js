require('dotenv').config();
//const fetch = require('node-fetch');
const express = require('express');
const path = require('path');
const app = express();
const axios = require('axios')

const PORT = process.env.PORT || 5000;
const SEARCH_API_URL = 'https://api.mercadolibre.com/sites/MLA/search?q=:query&limit=4';
const ITEM_DETAILS_API_URL = 'https://api.mercadolibre.com/items/:id';
const ITEM_DESCRIPTION_API_URL = 'https://api.mercadolibre.com/items/:id/description';

function error500Response(err) {
  const {res, msg = ''} = this;
  console.log({error500Response: msg, err})
  res.status(500).json({msg, err});
}

//const simpleErrorResponse = (err) => console.log({err});
const successResponse = (res, json) =>  res.status(200).json(json);

const searchItemsParser = (res, searchResponse) => {
  const {data = {}} = searchResponse;
  const categories = data.available_filters
  ?.find(filter => id='category')
  ?.values?.map(category => category.name) || [];
  const parsedData = {
    author: {
      name: 'Johann',
      lastname: 'Echavarría',
    },
    categories,
    items: data?.results.map(item => ({
      id: item.id ?? "N/A",
      title: item.title ?? "N/A",
      price: {
        currency: item.currency_id ?? "N/A",
        amount: Math.floor(item.price ?? 0),
        decimals: +((item.price ?? 0) % 1).toFixed(2).substring(2)
      },
      picture: item.thumbnail ?? "N/A",
      condition: item.condition ?? "N/A",
      free_shipping: item.shipping?.free_shipping ?? false
    }))
  }

  successResponse(res, parsedData);
  //successResponse(res, data);
}

const fetchSearchResults = (res, queryParam) => {
  const apiURL = SEARCH_API_URL.replace(':query', queryParam);
  axios.get(apiURL)
  .then(searchItemsParser.bind(null, res))
  .catch(error500Response.bind({res, msg: 'Error fetching item search'}));
  //.catch(simpleErrorResponse);
}


//app.use(express.json());
app.get('/api/items', (req, res) => {
  const queryParam = req?.query?.query || '';
  if(!queryParam){
    error500Response(res, 'No query param sent');
    return;
  }
  fetchSearchResults(res, queryParam)
})


// In development the 3000 port would be used for React. If react build was executed react app will be available on /
app.use(express.static(path.join(__dirname, 'front/build')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'front/build/index.html'));
});


app.listen(PORT, () => {
  console.log(`Server running on: http://localhost:${PORT}`);
});
