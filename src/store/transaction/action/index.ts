import { action } from 'typesafe-actions';
import {
  TransactionActionTypes,
  GetTransactionsOption,
  GetTransactionSuccessPayload,
} from '../types';

export function requestGetTransactions(options: GetTransactionsOption) {
  return action(TransactionActionTypes.REQUEST_GET_TRANSACTIONS, options);
}

export function requestGetTransactionsSuccess(
  payload: GetTransactionSuccessPayload,
) {
  return action(
    TransactionActionTypes.REQUEST_GET_TRANSACTIONSSUCCESS,
    payload,
  );
}

export function requestGetTransactionsFailure(error: any) {
  return action(TransactionActionTypes.REQUEST_GET_TRANSACTIONSFAILURE, error);
}
