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

export interface ConnectedReduxProps<A extends Action = AnyAction> {
  dispatch: Dispatch<A>;
}

export type ApplicationState = {
  auth: AuthState;
};

export const rootReducer = combineReducers({
  auth: authReducer,
});

const sagaMiddleware = createSagaMiddleware();

const reduxMiddleware = applyMiddleware(sagaMiddleware);

function* rootSaga() {
  yield all([fork(rootAuthSaga)]);
}

export const store = createStore(
  rootReducer,
  composeWithDevTools(reduxMiddleware),
);

sagaMiddleware.run(rootSaga);
