import {
  combineReducers,
  Dispatch,
  Action,
  AnyAction,
  createStore,
  applyMiddleware,
} from 'redux';
import createSagaMiddleware from 'redux-saga';
import { all, fork } from 'redux-saga/effects';
import { composeWithDevTools } from 'redux-devtools-extension';
import { authReducer } from './auth/reducer';
import { AuthState } from './auth/types';
import { rootAuthSaga } from './auth/saga';
import { TransactionState } from './transaction/types';
import { transactionReducer } from './transaction/reducer';
import { rootTransactionSaga } from './transaction/saga';

export interface ConnectedReduxProps<A extends Action = AnyAction> {
  dispatch: Dispatch<A>;
}

export type ApplicationState = {
  auth: AuthState;
  transaction: TransactionState;
};

export const rootReducer = combineReducers({
  auth: authReducer,
  transaction: transactionReducer,
});

const sagaMiddleware = createSagaMiddleware();

const reduxMiddleware = applyMiddleware(sagaMiddleware);

function* rootSaga() {
  yield all([fork(rootAuthSaga), fork(rootTransactionSaga)]);
}

export const store = createStore(
  rootReducer,
  composeWithDevTools(reduxMiddleware),
);

sagaMiddleware.run(rootSaga);
