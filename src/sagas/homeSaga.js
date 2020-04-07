import { all, put, takeLatest } from 'redux-saga/effects';

import { actionTypes } from '../constants/homeConstants';

export function* requestNewsListener({ payload }) {
    yield put({
        type: actionTypes.HOME_REQUEST_NEWS_SUCCESS,
        payload
    });
}

export default function* root() {
    yield all([takeLatest(actionTypes.HOME_REQUEST_NEWS, requestNewsListener)]);
}
