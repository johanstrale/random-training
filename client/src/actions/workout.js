import generateWorkoutExcersises from './helpers/generateWorkout';

export const GET_WORKOUT = 'GET_WORKOUT';
export const INIT_WORKOUT = 'INIT_WORKOUT';
export const START_WORKOUT = 'START_WORKOUT';
export const STOP_WORKOUT = 'STOP_WORKOUT';
export const COMPLETE_WORKOUT = 'COMPLETE_WORKOUT';
export const UPDATE_WORKOUT = 'UPDATE_WORKOUT';
export const FINISH_WORKOUT = 'FINISH_WORKOUT';

const receiveWorkout = (entries, introInterval) => ({
  type: GET_WORKOUT,
  payload: { entries, introInterval }
});

const initWorkout = () => ({
  type: INIT_WORKOUT
});

const startWorkout = () => ({
  type: START_WORKOUT
});

const stopWorkout = () => ({
  type: STOP_WORKOUT
});

const completeWorkout = () => ({
  type: COMPLETE_WORKOUT
});

const updateWorkout = entries => ({
  type: UPDATE_WORKOUT,
  payload: { entries, timeLeft: entries[0].time }
});

const finishWorkout = () => ({
  type: FINISH_WORKOUT
});

const fetchWorkout = (excersises, settings) => dispatch => {
  const entries = generateWorkoutExcersises(excersises, settings);
  dispatch(receiveWorkout(entries, settings.introInterval));
};

export { fetchWorkout, initWorkout, startWorkout, stopWorkout, completeWorkout, updateWorkout, finishWorkout };
