import { call, put, takeLatest } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import { api } from '~/services';

import { Creators as UsersActions, Types as UsersTypes } from '~/store/ducks/users';

export function* getUserLoggedRequest() {
  try {
    const url = 'me';
    const response = yield call(api.get, url);
    const { data } = response;

    yield put(UsersActions.getUserLoggedSuccess(data));
  } catch (error) {
    localStorage.clear();
    yield put(push('/login'));
    yield put(UsersActions.getUserLoggedFailure());
  }
}

export default function* saga() {
  yield takeLatest(UsersTypes.GET_LOGGED_REQUEST, getUserLoggedRequest);
}
