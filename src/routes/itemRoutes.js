const express = require('express');
const { fetchSearchResults, fetchItemDetail } = require('../services/itemsServices');
const { error500Response } = require('../utils/responses');

const router = express.Router();

router.get('/items', (req, res) => {
  const queryParam = req?.query?.query || '';
  if(!queryParam){
    error500Response.call({res, msg: 'No query param sent'});
    return;
  }
  fetchSearchResults(res, queryParam)
});

router.get('/items/:id', (req, res) => {
  const idItem = req?.params?.id || '';
  if(!idItem){
    error500Response.call({res, msg: 'No id param sent'});
    return;
  }
  fetchItemDetail(res, idItem)
});

module.exports = router;
