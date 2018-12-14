import excersises from '../assets/data';

export const FETCH_EXCERSISES = 'FETCH_EXCERSISES';

const fetchExcersises = () => ({
  type: FETCH_EXCERSISES,
  excersises
});

export default fetchExcersises;
