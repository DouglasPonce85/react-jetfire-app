import { all, put, takeLatest } from 'redux-saga/effects';

import { actionTypes } from '../constants/productsConstants';

export function* requestProductsNewsListener({ payload }) {
    yield put({
        type: actionTypes.PRODUCTS_REQUEST_NEWS_SUCCESS,
        payload
    });
}

export default function* root() {
    yield all([takeLatest(actionTypes.PRODUCTS_REQUEST_NEWS, requestProductsNewsListener)]);
}
