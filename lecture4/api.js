import axios from 'axios';

const API_KEY = 'fake_api_key';

const api = axios.create({
  baseURL: `https://api.outsidein.dev/${API_KEY}`,
});

export default api;
