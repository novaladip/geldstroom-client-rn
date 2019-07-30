import Validator from 'validator';
import { isEmpty } from '../../../utils';

export type ValidateAuthData = {
  email: string;
  password: string;
};

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

  if (isEmpty(password)) {
    error.password = 'Password is can not be empty';
  }

  return {
    isValid: isEmpty(error),
    error,
  };
}
