import { actionTypes } from '../constants/productsConstants';

export function requestNews() {
  console.log('Entered PRODUCTS-ACTION... ');

  return {
    type: actionTypes.PRODUCTS_REQUEST_NEWS,
    payload: 'Products View Loading Info...'
  };
}

export function incrementClicksCounter(globalCounter) {
  console.log('Entered PRODUCTS-ACTION... ', globalCounter);

  return {
    type: actionTypes.PRODUCTS_INCREMENT_COUNTER,
    payload: globalCounter
  };
}
