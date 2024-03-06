import axios from 'axios';

const fetchSearchResults = async (query: string) => {
  const { data } = await axios.get(`/api/items?query=${query}`);
  return data;
};

export default fetchSearchResults;
