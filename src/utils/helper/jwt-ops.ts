import AsyncStorage from '@react-native-community/async-storage';
import jwtDecode from 'jwt-decode';
import { User } from '../../store/auth/types';
import { api } from '../api';

const jwtKey = 'jwt';

export async function setDefaultAuthHeader(jwtToken: string): Promise<void> {
  api.defaults.headers.common['Authorization'] = await jwtToken;
}

export async function saveJwtToken(data: string): Promise<void> {
  return await AsyncStorage.setItem(jwtKey, data);
}

export async function deleteJwtToken(): Promise<void> {
  return await AsyncStorage.removeItem(jwtKey);
}

export async function getJwtToken(): Promise<string | null> {
  return await AsyncStorage.getItem(jwtKey);
}

export function decodeJwt(jwtToken: string): User {
  return jwtDecode<User>(jwtToken);
}

export function isTokenExpired(exp: number): boolean {
  const currentTime = Date.now() / 1000;
  return exp < currentTime;
}
