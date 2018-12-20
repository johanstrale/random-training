const generateWorkoutEntries = (excersises, settings) => {
  const entries = [];
  entries.push({ time: settings.introInterval, excersise: { name: 'Gör dig redo' } });
  for (let i = 0; i < excersises.length; i = i + 2) {
    let j = 0;
    while (j < 3) {
      entries.push({ time: settings.excersiseInterval, excersise: excersises[i] });
      entries.push({ time: settings.restInterval, excersise: { name: 'Vila' } });
      entries.push({ time: settings.excersiseInterval, excersise: excersises[i + 1] });
      j + 1 < 3 && entries.push({ time: settings.restInterval, excersise: { name: 'Vila' } });
      j = j + 1;
    }
    i + 2 < excersises.length && entries.push({ time: settings.restInterval * 2, excersise: { name: 'Längre Vila' } });
  }
  return entries;
};

export default generateWorkoutEntries;
