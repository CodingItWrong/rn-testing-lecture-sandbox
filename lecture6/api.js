import axios from 'axios';

const api = axios.create({
  baseURL: 'https://rn-testing-api.herokuapp.com',
});

export default api;
