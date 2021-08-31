import {
  SET_INPUT_VALUE,
  RESULT_API_RNA_SUCCESS,
  RESULT_API_RNA_ERROR,
  SET_SEARCH_SPORT,
  SET_SEARCH_SELECT_SPORT,
  CLICK_ON_NEW_SEARCH,
} from 'src/actions/search';

export const initialState = {
  city: '',
  sport: '',
  results: [],
  isNoResult: false,
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
        isNoResult: true,
      }
    case SET_SEARCH_SPORT:
      return {
        ...state,
        sport: action.value,
      }
    case SET_SEARCH_SELECT_SPORT:
      return{
        ...state,
        sport: action.value.name,
      }
    case CLICK_ON_NEW_SEARCH:
      return {
        ...state,
        sport: '',
        city: '',
        results: [],
        isNoResult: false,
      }
    default:
      return state;
  }
};

export default reducer;
