import { all, put, takeLatest } from 'redux-saga/effects';

import { actionTypes } from '../constants/homeConstants';

export function* requestDisplayDateListener({ payload }) {
    yield put({
        type: actionTypes.HOME_DISPLAY_DATE_SUCCESS,
        payload
    });
}

export default function* root() {
    yield all([takeLatest(actionTypes.HOME_DISPLAY_DATE, requestDisplayDateListener)]);
}
