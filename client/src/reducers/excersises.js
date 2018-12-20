import {
  FETCH_EXCERSISES_BEGIN,
  FETCH_EXCERSISES_FAILURE,
  FETCH_EXCERSISES_SUCCESS,
  FETCH_RANDOM_EXCERSISES_SUCCESS
} from '../actions/excersises';

const initialState = {
  items: [],
  loading: false,
  error: null,
  randomItems: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_EXCERSISES_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      };
    case FETCH_EXCERSISES_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.payload.items
      };
    case FETCH_EXCERSISES_FAILURE:
      return {
        ...state,
        items: [],
        loading: false,
        error: action.payload.error
      };
    case FETCH_RANDOM_EXCERSISES_SUCCESS:
      return {
        ...state,
        randomItems: action.payload.items
      };
    default:
      return state;
  }
};
