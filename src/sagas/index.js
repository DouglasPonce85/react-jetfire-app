import { all, fork } from 'redux-saga/effects';

import home from './productsSaga';

export default function* root() {
  yield all([fork(home)]);
}
