import { AuthState, AuthActionTypes, User } from '../types';

export const initialState: AuthState = {
  isAuthenticated: false,
  user: {} as User,
  isRequestLoginLoading: false,
  isRequestRegisterLoading: false,
  loginError: {},
  registerError: {},
};

export function authReducer(state = initialState, action: any): AuthState {
  switch (action.type) {
    case AuthActionTypes.REQUEST_LOGIN:
      return {
        ...state,
        isRequestLoginLoading: true,
        loginError: {},
      };

    case AuthActionTypes.REQUEST_LOGIN_SUCCESS:
      return {
        ...state,
        isRequestLoginLoading: false,
        loginError: {},
        isAuthenticated: true,
        user: action.payload.user,
      };

    case AuthActionTypes.REQUEST_LOGIN_FAILURE:
      return {
        ...state,
        isRequestLoginLoading: false,
        loginError: action.payload,
      };

    case AuthActionTypes.REQUEST_REGISTER:
      return {
        ...state,
        isRequestRegisterLoading: true,
        registerError: {},
      };

    case AuthActionTypes.REQUEST_REGISTER_SUCCESS:
      return {
        ...state,
        isRequestRegisterLoading: false,
        registerError: {},
      };

    case AuthActionTypes.REQUEST_REGISTER_FAILURE:
      return {
        ...state,
        isRequestRegisterLoading: false,
        registerError: action.payload,
      };

    case AuthActionTypes.LOGOUT_USER:
      return initialState;

    default:
      return state;
  }
}
