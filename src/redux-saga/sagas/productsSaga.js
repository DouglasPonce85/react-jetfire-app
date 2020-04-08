import { all, put, takeLatest } from 'redux-saga/effects';

import { actionTypes } from '../constants/productsConstants';

function* productsNewsListener({ payload }) {
    console.log('Entered SAGA | productsNewsListener ');
    yield put({
        type: actionTypes.PRODUCTS_REQUEST_NEWS_SUCCESS,
        payload
    });
}

function* incrementCounterListener({ payload }) {
    console.log('Entered SAGA | incrementCounterListener() ');
    yield put({
        type: actionTypes.PRODUCTS_INCREMENT_COUNTER_SUCCESS,
        payload
    });
}

function *watchAll() {
    yield all([
        takeLatest(actionTypes.PRODUCTS_REQUEST_NEWS, productsNewsListener),
        takeLatest(actionTypes.PRODUCTS_INCREMENT_COUNTER, incrementCounterListener)
    ]);
}

export default watchAll;
