import { all, call, fork, takeLeading, put } from 'redux-saga/effects';
import {
  requestGetTransactionsFailure,
  requestGetTransactions,
  requestGetTransactionsSuccess,
} from '../action';
import { TransactionActionTypes, Transaction } from '../types';
import { getTransactions } from '../service';

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

export function* rootTransactionSaga() {
  yield all([fork(watchRequestGetTransactions)]);
}
