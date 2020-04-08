import { all, put, takeLatest } from 'redux-saga/effects';

import { actionTypes } from '../constants/locationsConstants';

function* locationsUpdateDateListener({ payload }) {
    console.log('Entered SAGA | locationsUpdateDateListener ');
    yield put({
        type: actionTypes.LOCATIONS_UPDATE_DATE_SUCCESS,
        payload
    });
}

function *watchAll() {
    yield all([
        takeLatest(actionTypes.LOCATIONS_UPDATE_DATE, locationsUpdateDateListener),
    ]);
}

export default watchAll;
