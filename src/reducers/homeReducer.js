import { actionTypes } from '../constants/homeConstants';

const homeInitialState = {
    test: 'initial',
    newOfDay: 'Im empty...',
    message: 'Douglas'
}

const home = (state = homeInitialState, action) => {
    switch (action.type) {
        case actionTypes.HOME_REQUEST_NEWS_SUCCESS:
            console.log('REDUCER >> HOME_REQUEST_NEWS_SUCCESS... ', action);
            return { ...state, newOfDay: action.payload };
        default:
            return state;
    }
};

export default home;