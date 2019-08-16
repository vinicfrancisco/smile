import { call, put, takeLatest } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import { api } from '~/services';
import swal from 'sweetalert';

import { Creators as UsersActions, Types as UsersTypes } from '~/store/ducks/users';

export function* getUserLoggedRequest() {
  try {
    const url = 'user/v2/inhabitants/me';
    const response = yield call(api.get, url);
    const { data } = response.data;

    if (!!data.attributes.coworker) {
      yield put(UsersActions.getUserLoggedSuccess(response.data));
      return true;
    } else {
      localStorage.clear();
      yield put(push('/login'));
      yield call(swal, 'Acesso Negado', 'Você não tem permissões suficientes para acessar o painel', 'error');
      yield put(UsersActions.getUserLoggedFailure());
    }
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
