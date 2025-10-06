import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:3000', 
});


//auth
export const registerUser = async (data: any) => {
  return await API.post('/auth/register', data);
};
export const loginUser = async (data: any) => {
  return await API.post('/auth/login', data);
};

//task n category
export const getCategories = async () => API.get('/tasks/categories');
export const addCategory = async (name: string) => API.post('/tasks/categories', { name });
export const getGroupedTasks = async () => API.get('/tasks/grouped');
export const addTask = async (data: { task: string; description: string; categoryId: number }) =>
  API.post('/tasks', data);
