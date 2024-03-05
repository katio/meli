require('dotenv').config();
//const fetch = require('node-fetch');
const express = require('express');
const path = require('path');
const app = express();
const axios = require('axios')

const PORT = process.env.PORT || 5000;
const SEARCH_API_URL = 'https://api.mercadolibre.com/sites/MLA/search?q=:query';
const ITEM_DETAILS_API_URL = 'https://api.mercadolibre.com/items/:id';
const ITEM_DESCRIPTION_API_URL = 'https://api.mercadolibre.com/items/:id/description';

const error500Response = (res, description, err) =>{
  res.status(500).json({description, err});
}

//const simpleErrorResponse = (err) => console.log({err});
const successResponse = (res, json) =>  res.status(200).json(json);

const searchItemsParser = (res, searchResponse) => {
  const {data = {}} = searchResponse;
  successResponse(res, data);
}

const fetchSearchResults = (res, queryParam) => {
  const apiURL = SEARCH_API_URL.replace(':query', queryParam);
  axios.get(apiURL)
  .then(searchItemsParser.bind(null, res))
  .catch(error500Response.bind(null, res, 'Error fetching item search'));
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
