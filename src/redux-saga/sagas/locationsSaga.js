import { all, put, takeLatest } from 'redux-saga/effects';

import { actionTypes } from '../constants/locationsConstants';
import { getLocations } from '../../api/locationsApi'

function* locationsLoadListListener() {
    console.log('Entered SAGA | locationsLoadListListener ');

    const locations = yield getLocations();
    console.log('LOCATIONS >> ', locations);

    yield put({
        type: actionTypes.LOCATIONS_LOAD_LIST_SUCCESS,
        payload: locations
    });
}

function *watchAll() {
    yield all([
        takeLatest(actionTypes.LOCATIONS_LOAD_LIST, locationsLoadListListener),
    ]);
}

export default watchAll;
