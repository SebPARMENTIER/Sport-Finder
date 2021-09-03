import {
  SET_INPUT_VALUE,
  RESULT_API_RNA_SUCCESS,
  RESULT_API_RNA_ERROR,
  SET_SEARCH_SPORT,
  SET_SEARCH_SELECT_SPORT,
  GET_CITY_CENTER_COORDINATES,
  BUILD_MAP,
  GET_DATA_FOR_MARKERS,
  CLICK_ON_NEW_SEARCH,
  SET_SEARCH_CITY,
  CLICK_ERROR_FIELD_NOT_FULL,
} from 'src/actions/search';

import { CLICK_ON_BUTTON_LOG_OUT } from 'src/actions/user';

export const initialState = {
  city: '',
  sport: '',
  results: [],
  cityCenterLat: 46.227638,
  cityCenterLng: 2.213749,
  buildMap: false,
  markers: [],
  isNoResult: false,
  fullFieldSport: false,
  fullFieldCity: false,
  errorField: false,
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
        fullFieldSport: false,
        fullFieldCity: false,
      };
    case RESULT_API_RNA_ERROR:
      return {
        ...state,
        isNoResult: true,
        fullFieldSport: false,
        fullFieldCity: false,
      };
    case SET_SEARCH_SPORT:
      return {
        ...state,
        sport: action.value.label,
        fullFieldSport: true,
        errorField: false,
      };
    case SET_SEARCH_SELECT_SPORT:
      return {
        ...state,
        sport: action.value.name,
      };
    case SET_SEARCH_CITY:
      return {
        ...state,
        city: action.value.value,
        fullFieldCity: true,
        errorField: false,
      };
    case GET_CITY_CENTER_COORDINATES:
      return {
        ...state,
        cityCenterLat: action.data[1],
        cityCenterLng: action.data[0],
      };
    case BUILD_MAP:
      return {
        ...state,
        buildMap: true,
      };
    case GET_DATA_FOR_MARKERS:
      return {
        ...state,
        markers: action.data,
      };
    case CLICK_ON_NEW_SEARCH:
      return {
        ...state,
        sport: '',
        city: '',
        results: [],
        cityCenterLat: '',
        cityCenterLng: '',
        isNoResult: false,
        buildMap: false,
      };
    case CLICK_ON_BUTTON_LOG_OUT:
      return {
        ...state,
        sport: '',
        city: '',
      };
    case CLICK_ERROR_FIELD_NOT_FULL:
      return {
        ...state,
        errorField: true,
      };
    default:
      return state;
  }
};

export default reducer;
