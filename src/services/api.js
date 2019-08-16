import axios from 'axios';

const api = axios.create({
  baseURL: process.env.API_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  responseType: 'json',
});

// Interceptors: API Request
api.interceptors.request.use(
  async config => {
    // TODO: Before complete request check if localStorage have the auth_token, if is on storage add headers Authorization
    const token = await localStorage.getItem('auth_token');

    if (token !== null) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  error => Promise.reject(error),
);

// Interceptors: API Response
api.interceptors.response.use(config => config, error => Promise.reject(error));

export default api;
