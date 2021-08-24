/* eslint-disable no-alert */
/* eslint-disable no-restricted-globals */
import axios from 'axios';
import AuthInterface from 'models/Auth/AuthInterface';

const api = axios.create({
  baseURL: process.env.REACT_APP_DATABASE_URL,
  timeout: 3000,
  headers: { 'Access-Control-Allow-Origin': '*' },
});

api.interceptors.request.use(async config => {
  const authStorage = <AuthInterface>(
    JSON.parse(String(localStorage.getItem('authStorage')))
  );

  const { authenticated, token } = authStorage;

  if (authenticated) {
    let param = config.params;
    param = {
      ...config.params,
      auth: token,
    };
    return { ...config, params: param };
  }

  return config;
});

api.interceptors.response.use(
  res => {
    return res;
  },
  error => {
    if (error.response.status === 401) {
      alert(
        'Sua sessão expirou. Você será redirecionado para a tela de login.',
      );
      window.location.href = '/login';
    }
    return Promise.reject(error);
  },
);
export default api;
