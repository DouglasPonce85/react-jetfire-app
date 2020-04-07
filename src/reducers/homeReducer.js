import { actionTypes } from '../constants/homeConstants';

const homeInitialState = {
    title: 'JetFire App',
    currentDate: '00-00-00'
}

const home = (state = homeInitialState, action) => {
    switch (action.type) {
        case actionTypes.HOME_DISPLAY_DATE_SUCCESS:
            console.log('REDUCER >> HOME_DISPLAY_DATE_SUCCESS... ', action);
            return { ...state, currentDate: action.payload };
        default:
            return state;
    }
};

export default home;
