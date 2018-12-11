export const SET_CURRENT_WORKOUT = 'SET_CURRENT_WORKOUT';

const setCurrentWorkout = workout => ({
  type: SET_CURRENT_WORKOUT,
  workout
});

export default setCurrentWorkout;
