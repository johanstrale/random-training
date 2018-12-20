import {
  GET_WORKOUT,
  INIT_WORKOUT,
  START_WORKOUT,
  STOP_WORKOUT,
  COMPLETE_WORKOUT,
  UPDATE_WORKOUT,
  FINISH_WORKOUT,
  TICK_WORKOUT
} from '../actions/workout';

const initalState = {
  entries: [],
  isStarted: false,
  isComplete: false,
  timeLeft: 0
};

export default (state = initalState, action) => {
  switch (action.type) {
    case GET_WORKOUT:
      return {
        ...state,
        entries: [...action.payload.entries]
      };
    case INIT_WORKOUT:
      return {
        ...state,
        timeLeft: state.entries[0].time,
        isStarted: true
      };
    case START_WORKOUT:
      return {
        ...state,
        isStarted: true
      };
    case STOP_WORKOUT:
      return {
        ...state,
        isStarted: false
      };
    case UPDATE_WORKOUT:
      return {
        ...state,
        entries: [...action.payload.entries],
        timeLeft: action.payload.timeLeft
      };
    case COMPLETE_WORKOUT:
      return {
        ...state,
        isComplete: true
      };
    case FINISH_WORKOUT:
      return {
        ...initalState
      };
    case TICK_WORKOUT:
      return {
        ...state,
        timeLeft: state.timeLeft - 1
      };
    default:
      return state;
  }
};
