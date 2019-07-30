import { api, handleApiError } from '../../../utils';

export type Credentials = {
  email: string;
  password: string;
};

export type LoginResponse = {
  accessToken: string;
};

export async function login(userData: Credentials) {
  try {
    const res = await api.post('/auth/login', userData);
    const data = await res.data;
    return data;
  } catch (error) {
    handleApiError(error);
  }
}

export async function register(userData: Credentials) {
  try {
    const res = await api.post('/auth/register', userData);
    const data = await res.data;
    return data;
  } catch (error) {
    handleApiError(error);
  }
}
