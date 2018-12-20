import { UPDATE_SETTINGS } from '../actions/settings';

const initialState = {
  numberOfExcersises: 12,
  introInterval: 15,
  excersiseInterval: 10,
  restInterval: 5
};

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_SETTINGS:
      return action.settings;
    default:
      return state;
  }
};
