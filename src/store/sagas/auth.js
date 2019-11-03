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
    const { token } = response.data;

    localStorage.setItem('auth_token', token);

    yield put(push('/'));
    yield put(AuthActions.loginSuccess());
  } catch (error) {
    yield call(swal, 'Ops, algo deu errado', 'Não foi possível efetuar o login, tente novamente!', 'error');
    yield put(AuthActions.loginFailure());
  }
}

function* registerRequest(action) {
  try {
    const { data } = action.payload;
    const url = '/register';
    yield call(api.post, url, data);

    yield put(
      AuthActions.loginRequest({
        email: data.email,
        password: data.password,
      }),
    );

    yield put(push('/'));
    yield put(AuthActions.signUpSuccess());
  } catch (error) {
    yield call(swal, 'Ops, algo deu errado', 'Não foi possível efetuar o cadastro, tente novamente!', 'error');
    yield put(AuthActions.signUpFailure());
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
  yield takeLatest(AuthTypes.SIGNUP_REQUEST, registerRequest);
  yield takeLatest(AuthTypes.LOGOUT_REQUEST, logoutRequest);
}
