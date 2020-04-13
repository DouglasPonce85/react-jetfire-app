import { actionTypes } from '../constants/productsConstants';

const productsInitialState = {
    title: 'Welcome, Products View!',
    productsList: [],
}

const products = (state = productsInitialState, action) => {
    switch (action.type) {
        case actionTypes.PRODUCTS_LOAD_LIST_SUCCESS:
                return { ...state, productsList: action.payload };

        default:
            return state;
    }
};

export default products;
