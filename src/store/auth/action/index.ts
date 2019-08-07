import { action } from 'typesafe-actions';
import { AuthActionTypes, User } from '../types';

export type LoginPayload = {
  email: string;
  password: string;
  navigateToHome: () => void;
};

export type LoginSuccessPayload = {
  user: User;
};

export type RegisterPayload = {
  email: string;
  password: string;
  passwordComfirmation: string;
  popScreen: any;
};

export function requestLogin(loginPayload: LoginPayload) {
  return action(AuthActionTypes.REQUEST_LOGIN, loginPayload);
}

export function requestLoginSuccess(loginSuccessPayload: LoginSuccessPayload) {
  return action(AuthActionTypes.REQUEST_LOGIN_SUCCESS, loginSuccessPayload);
}

export function requestLoginFailure(error: any) {
  return action(AuthActionTypes.REQUEST_LOGIN_FAILURE, error);
}

export function requestRegister(registerPayload: RegisterPayload) {
  return action(AuthActionTypes.REQUEST_REGISTER, registerPayload);
}

export function requestRegisterSuccess() {
  return action(AuthActionTypes.REQUEST_REGISTER_SUCCESS);
}

export function requestRegisterFailure(error: any) {
  return action(AuthActionTypes.REQUEST_REGISTER_FAILURE, error);
}

export function logoutCurrentUser() {
  return action(AuthActionTypes.LOGOUT_USER);
}
