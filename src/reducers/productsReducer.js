import { actionTypes } from '../constants/productsConstants';

const productsInitialState = {
    test: 'initial',
    newOfDay: 'Welcome, Products View!',
    message: 'Douglas'
}

const products = (state = productsInitialState, action) => {
    switch (action.type) {
        case actionTypes.PRODUCTS_REQUEST_NEWS_SUCCESS:
            console.log('REDUCER >> PRODUCTS_REQUEST_NEWS_SUCCESS... ', action);
            return { ...state, newOfDay: action.payload };
        default:
            return state;
    }
};

export default products;
