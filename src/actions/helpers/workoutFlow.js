import { NEXT_EXCERSISE, NEXT_BLOCK, START_EXCERSISE, COMPLETE_WORKOUT } from '../workout';

const workoutFlow = workout => {
  const block = workout.blocks[workout.activeBlock];

  if (workout.isIntro) {
    return {
      type: START_EXCERSISE,
      isIntro: false
    };
  } else if (block.activeExcersise < block.excersises.length) {
    block.activeExcersise = block.activeExcersise + 1;
    const updatedBlocks = Object.assign({}, workout.blocks, block);
    return {
      type: NEXT_EXCERSISE,
      blocks: updatedBlocks
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
