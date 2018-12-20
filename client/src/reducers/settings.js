import { UPDATE_SETTINGS } from '../actions/settings';

const initialState = {
  numberOfExcersises: 6,
  introInterval: 3,
  excersiseInterval: 2,
  restInterval: 2
};

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_SETTINGS:
      return action.settings;
    default:
      return state;
  }
};
