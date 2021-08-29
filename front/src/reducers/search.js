import {
  SET_INPUT_VALUE,
  RESULT_API_RNA_SUCCESS,
  RESULT_API_RNA_ERROR,
  SET_SEARCH_SPORT,
  SET_SEARCH_SELECT_SPORT,
  GET_CITY_CENTER_COORDINATES,
  BUILD_MAP,
} from 'src/actions/search';

export const initialState = {
  city: '',
  sport: '',
  results: [],
  cityCenterLat: 46.227638,
  cityCenterLng: 2.213749,
  buildMap: false
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
    case GET_CITY_CENTER_COORDINATES:
      return{
        ...state,
        cityCenterLat: action.data[1],
        cityCenterLng: action.data[0],
        buildMap: true,
      }
    case BUILD_MAP:
      return {
        ...state,
        buildMap: false,
      }
    default:
      return state;
  }
};

export default reducer;