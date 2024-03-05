const axios = require('axios');
const { SEARCH_API_URL, ITEM_DETAILS_API_URL, ITEM_DESCRIPTION_API_URL } = require('../constants/apiUrls');
const { error500Response } = require('../utils/responses');
const { searchItemsParser, itemDetailParser } = require('../parsers/itemParsers');

const fetchSearchResults = (res, queryParam) => {
  const apiURL = SEARCH_API_URL.replace(':query', queryParam);
  axios.get(apiURL)
  .then(searchItemsParser.bind(null, res))
  .catch(error500Response.bind({res, msg: 'Error fetching item search'}));
}

const fetchItemDetail = (res, idItem) => {
  const detailsURL = ITEM_DETAILS_API_URL.replace(':id', idItem);
  const descriptionURL = ITEM_DESCRIPTION_API_URL.replace(':id', idItem);
  Promise.all([axios.get(detailsURL), axios.get(descriptionURL)])
    .then(results => {
      const detailsResponse = results[0].data;
      const descriptionResponse = results[1].data;
      itemDetailParser(res, detailsResponse, descriptionResponse);
    })
    .catch(error => {
      error500Response.call({res, msg: 'Error fetching item details and description', err: error});
    });
}

module.exports = { fetchSearchResults, fetchItemDetail };
