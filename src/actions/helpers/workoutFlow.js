import { NEXT_EXCERSISE, NEXT_BLOCK, START_EXCERSISE, COMPLETE_WORKOUT } from '../workout';

const workoutFlow = workout => {
  const block = workout.blocks[workout.activeBlock];

  if (workout.isIntro) {
    return {
      type: START_EXCERSISE,
    };
  } else if (block.activeExcersise < block.excersises.length - 1) {
    workout.blocks[workout.activeBlock].activeExcersise = block.activeExcersise + 1;
    return {
      type: NEXT_EXCERSISE,
      workout: workout
    };
  } else if (workout.activeBlock < workout.blocks.length) {
    return {
      type: NEXT_BLOCK
    };
  } else {
    return {
      type: COMPLETE_WORKOUT
    }
  }
};

export default workoutFlow;
