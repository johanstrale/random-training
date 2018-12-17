export const FETCH_EXCERSISES_BEGIN = 'FETCH_EXCERSISES_BEGIN';
export const FETCH_EXCERSISES_SUCCESS = 'FETCH_EXCERSISES_SUCCESS';
export const FETCH_EXCERSISES_FAILURE = 'FETCH_EXCERSISES_FAILURE';

const fetchExcersisesBegin = () => ({
  type: FETCH_EXCERSISES_BEGIN
});

const fetchExcersisesSuccess = items => ({
  type: FETCH_EXCERSISES_SUCCESS,
  payload: { items }
});

const fetchExcersisesFailure = error => ({
  type: FETCH_EXCERSISES_FAILURE,
  payload: { error }
});

const fetchExcersises = () => dispatch => {
  dispatch(fetchExcersisesBegin());
  return fetch('/api/excersises')
    .then(response => response.json(), error => dispatch(fetchExcersisesFailure(error)))
    .then(data => dispatch(fetchExcersisesSuccess(data)));
};

export default fetchExcersises;
