import { actionTypes } from '../constants/productsConstants';

const productsInitialState = {
    test: 'initial',
    newOfDay: 'Welcome, Products View!',
    message: 'Douglas',
    globalCounter: 0
}

const products = (state = productsInitialState, action) => {
    switch (action.type) {

        case actionTypes.PRODUCTS_REQUEST_NEWS_SUCCESS:
            console.log('REDUCER >> PRODUCTS_REQUEST_NEWS_SUCCESS... ', action);
            return { ...state, newOfDay: action.payload };

        case actionTypes.PRODUCTS_INCREMENT_COUNTER_SUCCESS:
            console.log('REDUCER >> PRODUCTS_INCREMENT_COUNTER_SUCCESS... ', action);
            return { ...state, globalCounter: action.payload + 1 };

        default:
            return state;
    }
};

export default products;
