import {
  all,
  call,
  fork,
  takeLeading,
  put,
  takeEvery,
  takeLatest,
} from 'redux-saga/effects';
import {
  requestGetTransactionsFailure,
  requestGetTransactions,
  requestGetTransactionsSuccess,
  addTransaction,
  addTransactionSuccess,
  addTransactionFailure,
  reqGetBalance,
  reqGetBalanceError,
  reqGetBalanceSuccess,
} from '../action';
import { TransactionActionTypes, Transaction } from '../types';
import { getTransactions, postTrasanaction, getBalance } from '../service';
import { validateAddTransactionInput } from '../helper';

export function* handleRequestGetTransactions(
  action: ReturnType<typeof requestGetTransactions>,
) {
  try {
    const res: Transaction[] = yield call(getTransactions, action.payload);
    yield put(requestGetTransactionsSuccess({ transaction: res }));
  } catch (error) {
    yield put(requestGetTransactionsFailure(error));
  }
}

export function* watchRequestGetTransactions() {
  yield takeLeading(
    TransactionActionTypes.REQUEST_GET_TRANSACTIONS,
    handleRequestGetTransactions,
  );
}

export function* handleAddTransaction(
  action: ReturnType<typeof addTransaction>,
) {
  try {
    const body = {
      type: action.payload.type,
      category: action.payload.category,
      description: action.payload.description,
      amount: action.payload.amount,
    };
    const { isValid, error } = yield call(validateAddTransactionInput, {
      amount: body.amount,
      description: body.description,
    });
    if (!isValid) {
      yield put(addTransactionFailure(error));
      return action.payload.showMessage({
        message: 'Failed to add record',
        description: 'Please check again your input',
        type: 'danger',
      });
    }
    const res = yield call(postTrasanaction, body);
    yield put(addTransactionSuccess(res));
  } catch (error) {
    action.payload.showMessage({
      message: 'Failed to add a record',
      description: 'Please check again your input',
      type: 'danger',
    });
    yield put(addTransactionFailure(error));
  }
}

export function* watchAddTransaction() {
  yield takeEvery(TransactionActionTypes.ADD_TRANSACTION, handleAddTransaction);
}

export function* handleReqGetBalance(action: ReturnType<typeof reqGetBalance>) {
  try {
    const { date, isMonthly } = action.payload;
    const res = yield call(getBalance, {
      date,
      isMonthly,
    });
    yield put(reqGetBalanceSuccess(res));
  } catch (error) {
    action.payload.showMessage({
      message: 'Failed to get balance',
      description: error.message || 'Please try again',
      type: 'danger',
    });
    yield put(reqGetBalanceError(error));
  }
}

export function* watchReqGetBalance() {
  yield takeLatest(TransactionActionTypes.REQ_GET_BALANCE, handleReqGetBalance);
}

export function* rootTransactionSaga() {
  yield all([
    fork(watchRequestGetTransactions),
    fork(watchAddTransaction),
    fork(watchReqGetBalance),
  ]);
}
