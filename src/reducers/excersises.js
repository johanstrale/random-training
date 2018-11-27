import excersises from '../assets/data';

import { FETCH_EXCERSISES } from '../actions/excersises';

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_EXCERSISES:
      return excersises;
    default:
      return state;
  }
};
