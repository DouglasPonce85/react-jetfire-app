import { all, fork } from 'redux-saga/effects';

import home from './homeSaga';

export default function* root() {
  yield all([fork(home)]);
}
