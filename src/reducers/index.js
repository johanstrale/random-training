import { combineReducers } from 'redux';

import excersises from './excersises';
import training from './training';

export default combineReducers({
  excersises,
  training
});
