import {
  GET_WORKOUT,
  START_WORKOUT,
  PAUSE_WORKOUT,
  STOP_WORKOUT,
  TIMER_TICK,
  NEXT_BLOCK,
  START_EXCERSISE,
  NEXT_EXCERSISE
} from '../actions/workout';

const initalState = {
  blocks: [],
  isRunning: false,
  isIntro: true,
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
    case TIMER_TICK:
      return {
        ...state,
        timeRemaining: state.timeRemaining - 1
      };
    case NEXT_BLOCK:
      return {
        ...state,
        activeBlock: state.activeBlock + 1
      };
    case START_EXCERSISE:
      return {
        ...state,
        isIntro: action.isIntro,
        timeRemaining: state.blocks[state.activeBlock].time
      };
    case NEXT_EXCERSISE:
      return {
        ...state,
        blocks: action.blocks,
        timeRemaining: state.blocks[state.activeBlock].time
      };
    default:
      return state;
  }
};
