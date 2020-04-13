import { all, put, takeLatest } from 'redux-saga/effects';

import { actionTypes } from '../constants/productsConstants';
import { getProducts } from '../../api/productsApi';

function* loadProductsListListener() {
    console.log('Entered SAGA | loadProductsListListener() ');

    const productsList = yield getProducts();
    console.log(productsList)

    yield put({
        type: actionTypes.PRODUCTS_LOAD_LIST_SUCCESS,
        payload: productsList
    });
}

function *watchAll() {
    yield all([
        takeLatest(actionTypes.PRODUCTS_LOAD_LIST, loadProductsListListener)
    ]);
}

export default watchAll;
