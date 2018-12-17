import restBlock from '../../assets/restblock';

const getRandomExcersises = (excersises, numberOfExcersises) => {
  const excersiseList = [excersises[Math.floor(Math.random() * excersises.length)]];

  while (excersiseList.length < numberOfExcersises) {
    const randomExcersise = excersises[Math.floor(Math.random() * excersises.length)];
    const lastExcersise = excersiseList.length - 1;

    if (
      excersiseList[lastExcersise] &&
      excersiseList[lastExcersise] !== randomExcersise &&
      excersiseList[lastExcersise].mainMuscleGroup !== randomExcersise.mainMuscleGroup &&
      !excersiseList.includes(randomExcersise)
    ) {
      excersiseList.push(randomExcersise);
    }
  }
  return excersiseList;
};

const generateWorkout = (excersises, settings) => {
  const blocks = [];
  const randomExcersises = getRandomExcersises(excersises, settings.numberOfBlocks * 2);
  let index = 0;

  while (index < randomExcersises.length) {
    blocks.push({
      number: blocks.length + 1,
      excersises: randomExcersises.slice(index, index + 2),
      activeExcersise: 0,
      time: settings.excersiseInterval
    });
    if (index < randomExcersises.length - 2) {
      blocks.push({
        number: blocks.length + 1,
        excersises: restBlock,
        time: settings.restInterval
      });
    }
    index = index + 2;
  }

  return { blocks, activeBlock: 0, timeRemaining: settings.introInterval };
};

export default generateWorkout;
