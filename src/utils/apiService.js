import axios from 'axios';

const API_BASE_URL = 'http://gateway.marvel.com/';
const API_KEY = '346e7c7ca144beff9190603308d90243';
const HASH = 'b86b807272ce894a245b6bc4f309c39a';
const TS = 1;

const apiService = axios.create({
  baseURL: API_BASE_URL
});

export const getData = async (count) => {
  const response = await apiService.get('/v1/public/characters', {
    params: {
      ts: TS,
      apikey: API_KEY,
      hash: HASH,
      limit: count
    }
  });
  return response.data;
};

export const getDataSearch = async (count, name) => {
  const response = await apiService.get('/v1/public/characters', {
    params: {
      ts: TS,
      apikey: API_KEY,
      hash: HASH,
      ...(name ? { nameStartsWith: name } : null),
      limit: count
    }
  });
  return response.data;
};

export const getComics = async (id) => {
  const response = await apiService.get(`/v1/public/characters/${id}/comics`, {
    params: {
      ts: TS,
      apikey: API_KEY,
      hash: HASH
    }
  });
  return response.data;
};
