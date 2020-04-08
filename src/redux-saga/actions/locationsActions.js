import { actionTypes } from '../constants/locationsConstants';

export function updateLocationDate(newTitle) {
  console.log('ACTIONS | LOCATIONS | updateLocationDate()...', newTitle);
  return {
    type: actionTypes.LOCATIONS_UPDATE_DATE,
    payload: newTitle
  };
}