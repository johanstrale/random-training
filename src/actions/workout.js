import generateWorkout from './helpers/workout';
import workoutFlow from './helpers/workoutFlow';

export const GET_WORKOUT = 'GET_WORKOUT';
export const START_WORKOUT = 'START_WORKOUT';
export const PAUSE_WORKOUT = 'PAUSE_WORKOUT';
export const STOP_WORKOUT = 'STOP_WORKOUT';
export const TIMER_TICK = 'TIMER_TICK';
export const NEXT_BLOCK = 'NEXT_BLOCK';
export const NEXT_EXCERSISE = 'NEXT_EXCERSISE';
export const START_EXCERSISE = 'START_EXCERSISE';

let timer = null;

const getWorkout = (excersises, settings) => ({
  type: GET_WORKOUT,
  workout: generateWorkout(excersises, settings)
});

const startWorkout = () => dispatch => {
  clearInterval(timer);
  timer = setInterval(() => dispatch(tick()), 1000);
  dispatch({ type: START_WORKOUT });
};

const pauseWorkout = excersises => {
  clearInterval(timer);
  return { type: PAUSE_WORKOUT };
};

const stopWorkout = excersises => ({
  type: STOP_WORKOUT
});

const tick = () => (dispatch, getState) => {
  const { workout } = getState();
  if (workout.timeRemaining > 0) {
    dispatch({ type: TIMER_TICK });
  } else {
    clearInterval(timer);
    dispatch(workoutFlow(workout));
    startWorkout()(dispatch);
  }
};

export { getWorkout, startWorkout, pauseWorkout, stopWorkout };
