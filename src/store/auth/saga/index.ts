import { all, call, fork, takeLatest, put } from 'redux-saga/effects';

import { AuthActionTypes } from '../types';
import { decodeJwt, saveJwtToken, setDefaultAuthHeader } from '../../../utils';
import {
  requestLoginSuccess,
  requestLoginFailure,
  requestLogin,
  requestRegister,
  requestRegisterFailure,
  requestRegisterSuccess,
} from '../action';
import { login, LoginResponse, register } from '../service';
import { validateAuthInput, validateRegisterInput } from '../helper';

export function* handleRequestLogin(action: ReturnType<typeof requestLogin>) {
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

export function* handleRequestRegister(
  action: ReturnType<typeof requestRegister>,
) {
  try {
    const { email, password, passwordComfirmation, popScreen } = action.payload;
    const { isValid, error } = yield call(validateRegisterInput, {
      email,
      password,
      passwordComfirmation,
    });
    if (!isValid) {
      return yield put(requestRegisterFailure(error));
    }
    yield call(register, { email, password });
    yield put(requestRegisterSuccess());
    yield call(popScreen);
  } catch (error) {
    yield put(requestRegisterFailure(error));
  }
}

export function* watchRequestLogin() {
  yield takeLatest(AuthActionTypes.REQUEST_LOGIN, handleRequestLogin);
}

export function* watchRequestRegister() {
  yield takeLatest(AuthActionTypes.REQUEST_REGISTER, handleRequestRegister);
}

export function* rootAuthSaga() {
  yield all([fork(watchRequestLogin), fork(watchRequestRegister)]);
}
