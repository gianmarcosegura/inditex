import axios from 'axios';

const API_BASE_URL = 'http://gateway.marvel.com/';
const API_KEY = '346e7c7ca144beff9190603308d90243';

const apiService = axios.create({
  baseURL: API_BASE_URL
});

export const getData = async (count) => {
  const response = await apiService.get('/v1/public/characters', {
    params: {
      ts: 1,
      apikey: API_KEY,
      hash: 'b86b807272ce894a245b6bc4f309c39a',
      limit: count
    }
  });
  return response.data;
};
