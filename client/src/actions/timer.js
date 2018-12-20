export const START_TIMER = 'START_TIMER';
export const STOP_TIMER = 'STOP_TIMER';
export const COMPLETE_TIMER = 'COMPLETE_TIMER';
export const TICK_TIMER = 'TICK_TIMER';

const initTimer = time => dispatch => {
  return { type: START_TIMER, time };
};

const completeTimer = () => ({
  type: COMPLETE_TIMER
});

const tickTimer = () => ({
  type: TICK_TIMER
});

export { initTimer, tickTimer, completeTimer };
