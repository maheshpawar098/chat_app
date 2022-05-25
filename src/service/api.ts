import {AxiosPromise, AxiosRequestConfig} from 'axios';

type AxiosMethods = {
  get: (config: AxiosRequestConfig) => AxiosPromise<any>;
  post: (config: AxiosRequestConfig) => AxiosPromise<any>;
};

const getUserApi = ({get, post}: AxiosMethods) => {
  const getUsers = () => get({url: '/users'});

  return {
    getUsers,
  };
};


export default getUserApi