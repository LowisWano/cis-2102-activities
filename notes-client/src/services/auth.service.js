import axios from "axios";

export const login = async (email) => {
  const response = await axios.post('/users/login', email);
  return response.data;
}

export const register = async (newAccount) => {
  const response = await axios.post('/users/register', newAccount);
  return response.data;
}