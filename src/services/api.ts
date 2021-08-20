import axios from 'axios';
import { auth } from './firebase';

const api = axios.create({
  baseURL: process.env.REACT_APP_DATABASE_URL,
  timeout: 3000,
  headers: { 'Access-Control-Allow-Origin': '*' },
});

api.interceptors.request.use(async config => {
  const authenticated = auth.currentUser?.emailVerified;

  if (authenticated) {
    const token = await auth.currentUser?.getIdToken().then(idToken => idToken);

    let param = config.params;
    param = {
      ...config.params,
      auth: token,
    };
    return { ...config, params: param };
  }

  return config;
});

export default api;
