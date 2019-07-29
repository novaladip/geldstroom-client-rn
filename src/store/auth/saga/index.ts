import { all, call, fork, takeLatest, put } from 'redux-saga/effects';
import { AuthActionTypes, User } from '../types';
import {
  requestLoginSuccess,
  requestLoginFailure,
  requestLogin,
} from '../action';
import { login, LoginResponse } from '../service';
import jwtDecode from 'jwt-decode';

export function* requstLogin(action: ReturnType<typeof requestLogin>) {
  try {
    const res: LoginResponse = yield call(login, {
      email: action.payload.email,
      password: action.payload.password,
    });
    // TODO SAVE ACCESS TOKEN TO ASYNC STORAGE
    const decoded = jwtDecode<User>(res.accessToken);
    yield put(requestLoginSuccess({ user: decoded }));
    action.payload.navigateToHome();
  } catch (e) {
    yield put(requestLoginFailure(e));
  }
}

export function* watchRequestLogin() {
  yield takeLatest(AuthActionTypes.REQUEST_LOGIN, requstLogin);
}

export function* rootAuthSaga() {
  yield all([fork(watchRequestLogin)]);
}
