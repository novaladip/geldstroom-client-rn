import Validator from 'validator';

import { isEmpty } from '../../../utils';

export interface ValidateAddTransactionInput {
  amount: string;
  description: string;
}

export function validateAddTransactionInput(data: ValidateAddTransactionInput) {
  let error = {} as ValidateAddTransactionInput;
  const amount = !isEmpty(data.amount) ? data.amount : '';

  if (!Validator.isNumeric(amount)) {
    error.amount = 'Invalid amount';
  }

  if (isEmpty(amount)) {
    error.amount = 'Amount is can not be empty';
  }

  if (
    !isEmpty(data.description) &&
    !Validator.isLength(data.description, { min: 3, max: 40 })
  ) {
    error.description = 'Description length must be between 3 and 40';
  }

  return {
    isValid: isEmpty(error),
    error,
  };
}
