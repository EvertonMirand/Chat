import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.gitter.im/v1/rooms',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: 'Bearer 6e59a93564c01b1a38d321f40696fc186796c0c8',
  },
});

export default api;
