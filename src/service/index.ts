import getUserApi from './api';
import createAxios from './axiosSetup';

const REST_API_URL = 'https://jsonplaceholder.typicode.com';

const axiosInstance = createAxios(REST_API_URL);

const api = {
  user: getUserApi(axiosInstance),
};

export default api;
