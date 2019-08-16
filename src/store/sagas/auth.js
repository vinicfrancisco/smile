import { call, put, takeLatest, delay, select } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import { api } from '~/services';
import swal from 'sweetalert';

import { Creators as AuthActions, Types as AuthTypes } from '~/store/ducks/auth';
import { getUserLoggedRequest } from '~/store/sagas/users';

function* loginRequest(action) {
  try {
    // localStorage.setItem('auth_token', 'teste');

    // const success = yield call(getUserLoggedRequest);

    // if (!success) {
    // yield put(AuthActions.loginFailure());

    // return;
    // }

    yield put(push('/'));
    yield put(AuthActions.loginSuccess());
  } catch (error) {
    yield put(AuthActions.loginFailure());
  }
}

function* logoutRequest() {
  try {
    localStorage.clear();
    yield delay(500);
    yield put(push('/login'));

    yield put(AuthActions.logoutSuccess());
  } catch (error) {
    yield put(AuthActions.logoutFailure());
  }
}

export default function* saga() {
  yield takeLatest(AuthTypes.LOGIN_REQUEST, loginRequest);
  yield takeLatest(AuthTypes.LOGOUT_REQUEST, logoutRequest);
}
