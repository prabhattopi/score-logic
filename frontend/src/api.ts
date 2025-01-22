import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000/api' });

export const createUser = (username: string) =>
  API.post('/user', { username });

export const incrementPoints = (userId: string) =>
  API.post('/increment', { userId });

export const getUserData = (userId: string) => API.get(`/user/${userId}`);
