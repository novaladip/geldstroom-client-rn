import axios, { AxiosError } from 'axios';

export const BASE_URL = 'https://intense-springs-88456.herokuapp.com/';
export const api = axios.create({ baseURL: BASE_URL });

export const handleApiError = (error: AxiosError) => {
  if (error.response) {
    throw error.response.data;
  } else {
    const error = {
      error: 'Network Error',
      message: 'Looks like you have a connection problem',
    };
    throw error;
  }
};
