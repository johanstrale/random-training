import { combineReducers } from 'redux';

import excersises from './excersises';
import workout from './workout';
import settings from './settings';

export default combineReducers({
  excersises,
  workout,
  settings
});
