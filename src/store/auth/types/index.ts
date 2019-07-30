export type User = {
  id: string;
  email: string;
  exp: number;
  iat: number;
};

export type AuthState = {
  isAuthenticated: boolean;
  user: User;
  isRequestLoginLoading: boolean;
  isRequestRegisterLoading: boolean;
  loginError: any;
  registerError: any;
};

export enum AuthActionTypes {
  REQUEST_LOGIN = '@@auth/REQUEST_LOGIN',
  REQUEST_LOGIN_SUCCESS = '@@auth/REQUEST_LOGIN_SUCCESS',
  REQUEST_LOGIN_FAILURE = '@@auth/REQUEST_LOGIN_FAILURE',
  REQUEST_REGISTER = '@@auth/REQUEST_REGISTER',
  REQUEST_REGISTER_SUCCESS = '@@auth/REQUEST_REGISTER_SUCCESS',
  REQUEST_REGISTER_FAILURE = '@@auth/REQUEST_REGISTER_FAILURE',
}
