import axios, {AxiosRequestConfig} from 'axios';


const createAxios = (url: string) => {
  const customAxios = axios.create({
    baseURL: url,
  });

  customAxios.interceptors.request.use(
    async config => {
      return config;
    },
    error => {
      // Do something with request error
      console.log(error);
      Promise.reject(error);
    },
  );

  customAxios.interceptors.response.use(
    response => response,
    async error => {
      console.log(error.response);

      // return error.response
      return Promise.reject(error);
    },
  );

  return {
    get: (config: AxiosRequestConfig) =>
      customAxios({
        method: 'GET',
        ...config,
      }),
    post: (config: AxiosRequestConfig) =>
      customAxios({
        method: 'POST',
        ...config,
      }),
  };
};


export default createAxios