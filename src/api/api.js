import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.goit.global';

export const setAuthToken = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearAuthToken = () => {
  delete axios.defaults.headers.common.Authorization;
};
