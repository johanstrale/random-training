import {
  GET_WORKOUT,
  START_WORKOUT,
  PAUSE_WORKOUT,
  STOP_WORKOUT,
  COMPLETE_WORKOUT,
  TIMER_TICK,
  NEXT_BLOCK,
  START_EXCERSISE,
  NEXT_EXCERSISE
} from '../actions/workout';

const initalState = {
  blocks: [],
  isRunning: false,
  isIntro: true,
  isComplete: false,
  activeBlock: 0,
  timeRemaining: 0
};

export default (state = initalState, action) => {
  switch (action.type) {
    case GET_WORKOUT:
      return {
        ...state,
        ...action.workout
      };
    case START_WORKOUT:
      return {
        ...state,
        isRunning: true
      };
    case PAUSE_WORKOUT:
      return {
        ...state,
        isRunning: false
      };
    case STOP_WORKOUT:
      return {
        ...state,
        isRunning: false,
        activeBlock: 0
      };
    case COMPLETE_WORKOUT:
      return {
        ...state,
        isComplete: true
      };
    case TIMER_TICK:
      return {
        ...state,
        timeRemaining: state.timeRemaining - 1
      };
    case NEXT_BLOCK:
      return {
        ...state,
        timeRemaining: state.blocks[state.activeBlock].time,
        activeBlock: state.activeBlock + 1
      };
    case START_EXCERSISE:
      return {
        ...state,
        isIntro: false,
        timeRemaining: state.blocks[state.activeBlock].time
      };
    case NEXT_EXCERSISE:
      return {
        ...state,
        ...action.workout,
        timeRemaining: state.blocks[state.activeBlock].time
      };
    default:
      return state;
  }
};
