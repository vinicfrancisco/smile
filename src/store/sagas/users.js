import { call, put, takeLatest } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import { api } from '~/services';
import swal from 'sweetalert';

import { Creators as UsersActions, Types as UsersTypes } from '~/store/ducks/users';

export function* getUserLoggedRequest() {
  try {
    yield put(UsersActions.getUserLoggedSuccess(response.data));
    return true;
    yield put(UsersActions.getUserLoggedFailure());
  } catch (error) {
    localStorage.clear();
    yield put(push('/login'));
    yield put(UsersActions.getUserLoggedFailure());
  }
  return false;
}

export default function* saga() {
  yield takeLatest(UsersTypes.GET_LOGGED_REQUEST, getUserLoggedRequest);
}
