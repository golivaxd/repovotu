import axios from 'axios';

const api = axios.create({
  baseURL: 'tu_url_backend_de_render'
});

export default api;
