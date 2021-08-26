import {
  SET_INPUT_VALUE,
  RESULT_API_RNA_TOTAL_PAGE_SUCCESS,
  RESULT_API_RNA_ERROR,
  RESULT_API_RNA_SUCCESS
} from 'src/actions/search';

export const initialState = {
  city: '',
  sport: '',
  searchTotalPages: '',
  results: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_INPUT_VALUE:
      return {
        ...state,
        [action.name]: action.value,
      };
      case RESULT_API_RNA_TOTAL_PAGE_SUCCESS:
        return {
          ...state,
          searchTotalPages: action.data
        };
      case RESULT_API_RNA_ERROR:
        return {
          ...state,
        }
      case RESULT_API_RNA_SUCCESS:
        return {
          ...state,
          results: action.data
        }
    default:
      return state;
  }
};

export default reducer;