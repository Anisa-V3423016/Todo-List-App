import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:3000', 
});

export const registerUser = async (data: any) => {
  return await API.post('/auth/register', data);
};

export const loginUser = async (data: any) => {
  return await API.post('/auth/login', data);
};
