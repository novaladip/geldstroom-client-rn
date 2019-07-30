import Validator from 'validator';
import { isEmpty } from '../../../utils';

export type ValidateAuthData = {
  email: string;
  password: string;
};

export type ValidateRegisterInput = {
  email: string;
  password: string;
  passwordComfirmation: string;
};

export function validateRegisterInput(data: ValidateRegisterInput) {
  let error = {} as ValidateRegisterInput;
  const email = isEmpty(data.email) ? '' : data.email;
  const password = isEmpty(data.password) ? '' : data.password;
  const passwordComfirmation = isEmpty(data.passwordComfirmation)
    ? ''
    : data.passwordComfirmation;

  if (!Validator.isEmail(email)) {
    error.email = 'Invalid email address';
  }

  if (isEmpty(email)) {
    error.email = 'Email is can not be empty';
  }

  if (!Validator.isLength(password, { min: 6, max: 12 })) {
    error.password = 'Password length is must be between 6 & 12';
  }

  if (isEmpty(password)) {
    error.password = 'Password is can not be empty';
  }

  if (!Validator.matches(passwordComfirmation, password)) {
    error.passwordComfirmation = "Password comfirmation doesn't match";
  }

  return {
    isValid: isEmpty(error),
    error,
  };
}

export function validateAuthInput(
  data: ValidateAuthData,
): { isValid: boolean; error: ValidateAuthData } {
  let error = {} as ValidateAuthData;
  const email = isEmpty(data.email) ? '' : data.email;
  const password = isEmpty(data.password) ? '' : data.password;

  if (!Validator.isEmail(email)) {
    error.email = 'Invalid email address';
  }

  if (isEmpty(email)) {
    error.email = 'Email is can not be empty';
  }

  if (!Validator.isLength(password, { min: 6, max: 12 })) {
    error.password = 'Password length is must be between 6 & 12';
  }

  if (isEmpty(password)) {
    error.password = 'Password is can not be empty';
  }

  return {
    isValid: isEmpty(error),
    error,
  };
}
