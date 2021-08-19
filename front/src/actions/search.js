export const SET_INPUT_VALUE = 'SET_INPUT_VALUE'
export const SEARCH = 'SEARCH';

export const createSetInputValueAction = (newValue, name) => ({
  type: SET_INPUT_VALUE,
  value: newValue,
  name: name,
});

export const createSearchAction = () => ({ type: SEARCH });