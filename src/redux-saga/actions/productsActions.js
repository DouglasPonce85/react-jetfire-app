import { actionTypes } from '../constants/productsConstants';

export function loadProductsList() {
  console.log('Entered ACTION | actionLoadProductsList... ', loadProductsList);

  return {
    type: actionTypes.PRODUCTS_LOAD_LIST
  };
}
