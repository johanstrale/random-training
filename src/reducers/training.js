import { SET_CURRENT_WORKOUT } from '../actions/training';

export default (state = { isGenerated: false, currentWorkout: [] }, action) => {
  switch (action.type) {
    case SET_CURRENT_WORKOUT:
      return { currentWorkout: action.workout, isGenerated: true };
    default:
      return state;
  }
};
