import { all } from 'redux-saga/effects';

import sagaAuth from './auth';

export default function* rootSaga() {
  return yield all([sagaAuth()]);
}
