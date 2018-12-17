import { UPDATE_SETTINGS } from '../actions/settings';

const initialState = {
  numberOfBlocks: 4,
  introInterval: 2,
  excersiseInterval: 2,
  restInterval: 15
};

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_SETTINGS:
      return action.settings;
    default:
      return state;
  }
};
