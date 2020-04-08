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
            return { ...state, newOfDay: action.payload };

        case actionTypes.PRODUCTS_INCREMENT_COUNTER_SUCCESS:
            return { ...state, globalCounter: action.payload + 1 };

        default:
            return state;
    }
};

export default products;
