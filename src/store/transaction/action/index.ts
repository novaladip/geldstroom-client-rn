import { action } from 'typesafe-actions';
import {
  TransactionActionTypes,
  GetTransactionsOption,
  GetTransactionSuccessPayload,
  AddTransactionPayload,
  AddTransactionSuccessPayload,
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

export function addTransaction(payload: AddTransactionPayload) {
  return action(TransactionActionTypes.ADD_TRANSACTION, payload);
}

export function addTransactionSuccess(payload: AddTransactionSuccessPayload) {
  return action(TransactionActionTypes.ADD_TRANSACTION_SUCCESS, payload);
}

export function addTransactionFailure(payload: { error: any }) {
  return action(TransactionActionTypes.ADD_TRANSACTION_ERROR, payload);
}
