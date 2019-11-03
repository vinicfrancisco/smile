import { call, put, takeLatest, delay } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import { api } from '~/services';
import swal from 'sweetalert';

import { Creators as AuthActions, Types as AuthTypes } from '~/store/ducks/auth';

function* loginRequest(action) {
  try {
    const { data } = action.payload;
    const url = '/login';
    const response = yield call(api.post, url, data);
    const { jwt } = response.data;

    localStorage.setItem('auth_token', jwt);

    if (!success) {
      yield put(AuthActions.loginFailure());

      return;
    }

    yield put(push('/'));
    yield put(AuthActions.loginSuccess());
  } catch (error) {
    if (error.response !== undefined) {
      const { message } = error.response.data.error;

      if (message) {
        yield call(swal, 'Ops, algo deu errado', message, 'error');
      }
    } else {
      yield call(swal, 'Ops, algo deu errado', 'Não foi possível efetuar o login, tente novamente!', 'error');
    }

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
