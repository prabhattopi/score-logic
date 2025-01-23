import axios from 'axios';

const API = axios.create({ baseURL: import.meta.env.VITE_API_URL });

export const createUser = (username: string) =>
  API.post('/user', { username });

export const incrementPoints = (userId: string) =>
  API.post('/increment', { userId });

export const getUserData = (userId: string) => API.get(`/user/${userId}`);
