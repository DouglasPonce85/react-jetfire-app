import { actionTypes } from '../constants/locationsConstants';

export function locationsLoadList() {
  console.log('ACTIONS | LOCATIONS | locationsLoadList()...');
  return {
    type: actionTypes.LOCATIONS_LOAD_LIST,
    payload: null
  };
}