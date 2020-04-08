import { actionTypes } from '../constants/locationsConstants';

const locationsInitialState = {
    title: 'LOCATIONS ENTRY POINT'
}

const locations = (state = locationsInitialState, action) => {
    switch (action.type) {

        case actionTypes.LOCATIONS_UPDATE_DATE_SUCCESS:
            return { ...state, title: action.payload };

        default:
            return state;
    }
};

export default locations;
