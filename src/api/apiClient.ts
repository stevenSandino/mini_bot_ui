import axios, {AxiosResponse, AxiosError } from 'axios';

const apiClient = axios.create({
    baseURL: 'https://localhost:7029/MiniBot',
    headers:{
        'Content-Type': 'application/json',
    },
});

const responseHandler = (response: AxiosResponse) => response;

const errorHandler = (error: AxiosError) => {
    console.log(error.message);
    return Promise.reject(error.message);
};

apiClient.interceptors.response.use(responseHandler, errorHandler);

export default apiClient;
