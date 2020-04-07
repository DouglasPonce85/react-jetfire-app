import { actionTypes } from '../constants/productsConstants';

export function requestNews() {
  return {
    type: actionTypes.PRODUCTS_REQUEST_NEWS,
    payload: 'Products View Loading Info...'
  };
}
