import { all, fork } from 'redux-saga/effects';

import home from './homeSaga';
import products from './productsSaga';

export default function* root() {
   yield all([
     fork(home),
     fork(products)
   ]);
}
