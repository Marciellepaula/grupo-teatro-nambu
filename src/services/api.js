import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost/api', 
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

export const fetchActors = async () => {
  try {
    const response = await api.get('/actors');
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar atores:', error);
    return [];
  }
};
