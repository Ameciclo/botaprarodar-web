import axios from 'axios';

const api = axios.create({
  baseURL: 'https://bpr-dev.firebaseio.com',
});

export default api;
