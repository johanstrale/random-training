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

export default getRandomExcersises;
