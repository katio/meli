import axios from 'axios';

const fetchItemDetails = async (id: string) => {
  const { data } = await axios.get(`/api/items/${id}`);
  return data;
};

export default fetchItemDetails;
