import { all } from 'redux-saga/effects';

import sagaAuth from './auth';
import sagaUsers from './users';

export default function* rootSaga() {
  return yield all([sagaAuth(), sagaUsers()]);
}
