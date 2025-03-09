import axios from 'axios';

const api = axios.create({
  baseURL: 'https://votu.onrender.com' // URL de tu backend en Render
});

export const getUsuarios = async () => {
  try {
    const response = await api.get('/api/usuarios');
    return response.data;
  } catch (error) {
    console.error('Error fetching usuarios:', error);
    throw error;
  }
};

export default api;

