const { successResponse } = require('../utils/responses');

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
      id: item.id ?? 'N/A',
      title: item.title ?? 'N/A',
      price: {
        currency: item.currency_id ?? 'N/A',
        amount: Math.floor(item.price ?? 0),
        decimals: +((item.price ?? 0) % 1).toFixed(2).substring(2)
      },
      picture: item.thumbnail ?? 'N/A',
      condition: item.condition ?? 'N/A',
      free_shipping: item.shipping?.free_shipping ?? false
    }))
  }

  successResponse(res, parsedData);
}

const itemDetailParser = (res, detailsResponse, descriptionResponse) => {
  const parsedData = {
    author: {
      name: 'Johann',
      lastname: 'Echavarría'
    },
    item: {
      id: detailsResponse.id ?? 'N/A',
      title: detailsResponse.title ?? 'N/A',
      price: {
        currency: detailsResponse.currency_id ?? 'N/A',
        amount: Math.floor(detailsResponse.price ?? 0),
        decimals: +((detailsResponse.price ?? 0) % 1).toFixed(2).substring(2)
      },
      picture: detailsResponse.pictures?.[0]?.url ?? 'N/A',
      condition: detailsResponse.condition ?? 'N/A',
      free_shipping: detailsResponse.shipping?.free_shipping ?? false,
      sold_quantity: detailsResponse.sold_quantity ?? 0,
      description: descriptionResponse.plain_text ?? ''
    }
  };

  successResponse(res, parsedData);
}

module.exports = { searchItemsParser, itemDetailParser };
