export const SET_INPUT_VALUE = 'SET_INPUT_VALUE'
export const SEARCH_SPORT = 'SEARCH_SPORT';
export const RESULT_API_RNA_SUCCESS = 'RESULT_API_RNA_SUCCESS';
export const RESULT_API_RNA_ERROR = 'RESULT_API_RNA_ERROR';

export const createSetInputValueAction = (newValue, name) => ({
  type: SET_INPUT_VALUE,
  value: newValue,
  name: name,
});

export const createSearchAction = () => ({ type: SEARCH_SPORT });

export const getResultsFromApiSuccess = (data) => ({
  type: RESULT_API_RNA_SUCCESS,
  data,
});

export const getResultsFromApiError = () => ({ type: RESULT_API_RNA_ERROR });
