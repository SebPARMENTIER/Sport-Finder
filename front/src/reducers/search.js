import {
  SET_INPUT_VALUE,
  RESULT_API_RNA_SUCCESS,
  RESULT_API_RNA_ERROR,
} from 'src/actions/search';

export const initialState = {
  city: '',
  sport: '',
  results: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_INPUT_VALUE:
      return {
        ...state,
        [action.name]: action.value,
      };
    case RESULT_API_RNA_SUCCESS:
      return {
        ...state,
        results: action.data,
      };
    case RESULT_API_RNA_ERROR:
      return {
        ...state,
      }
    default:
      return state;
  }
};

export default reducer;
