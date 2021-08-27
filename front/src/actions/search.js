export const SET_INPUT_VALUE = 'SET_INPUT_VALUE'
export const SEARCH_SPORT = 'SEARCH_SPORT';
export const RESULT_API_RNA_SUCCESS = 'RESULT_API_RNA_SUCCESS';
export const RESULT_API_RNA_ERROR = 'RESULT_API_RNA_ERROR';
export const SET_SEARCH_SPORT = 'SET_SEARCH_SPORT';
export const SET_SEARCH_SELECT_SPORT = 'SET_SEARCH_SELECT_SPORT';

export const createSetSearchSportAction = (newValue) => ({
  type: SET_SEARCH_SPORT,
  value: newValue,
});

export const createSetSearchSportSelectAction = (newValue) => ({
  type: SET_SEARCH_SELECT_SPORT,
  value: newValue,
});

export const createSearchAction = () => ({ type: SEARCH_SPORT });

export const getResultsFromApiSuccess = (data) => ({
  type: RESULT_API_RNA_SUCCESS,
  data,
});

export const getResultsFromApiError = () => ({ type: RESULT_API_RNA_ERROR });