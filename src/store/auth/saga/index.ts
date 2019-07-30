import { all, call, fork, takeLatest, put } from 'redux-saga/effects';

import { AuthActionTypes } from '../types';
import { decodeJwt, saveJwtToken, setDefaultAuthHeader } from '../../../utils';
import {
  requestLoginSuccess,
  requestLoginFailure,
  requestLogin,
} from '../action';
import { login, LoginResponse } from '../service';
import { validateAuthInput } from '../helper';

export function* requstLogin(action: ReturnType<typeof requestLogin>) {
  try {
    const { email, password } = action.payload;
    const { isValid, error } = yield call(validateAuthInput, {
      email,
      password,
    });
    if (!isValid) {
      return yield put(requestLoginFailure(error));
    }
    const res: LoginResponse = yield call(login, {
      email: action.payload.email,
      password: action.payload.password,
    });
    yield call(saveJwtToken, res.accessToken);
    yield call(setDefaultAuthHeader, res.accessToken);
    const decoded = decodeJwt(res.accessToken);
    yield put(requestLoginSuccess({ user: decoded }));
    yield call(action.payload.navigateToHome);
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
