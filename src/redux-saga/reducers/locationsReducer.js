import { actionTypes } from '../constants/locationsConstants';

const locationsInitialState = {
    title: 'LOCATIONS ENTRY POINT',
    locationsList: []
}

const locations = (state = locationsInitialState, action) => {
    switch (action.type) {

        case actionTypes.LOCATIONS_LOAD_LIST_SUCCESS:
            console.log('Entered REDUCER | LOCATIONS_LOAD_LIST_SUCCESS ', action.payload);
            return { ...state, locationsList: action.payload };

        default:
            return state;
    }
};

export default locations;
