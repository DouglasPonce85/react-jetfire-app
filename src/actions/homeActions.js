import { actionTypes } from '../constants/homeConstants';

export function displayDate() {
  return {
    type: actionTypes.HOME_DISPLAY_DATE,
    payload: new Date().toLocaleDateString()
  };
}