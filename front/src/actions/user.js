export const SET_USER_INPUT_VALUE = 'SET_USER_INPUT_VALUE';
export const CREATE_USER = 'CREATE_USER';

export const createUserSetInputValueAction = (newValue, name) => ({
  type: SET_USER_INPUT_VALUE,
  value: newValue,
  name: name,
});

export const createUserAction = () => ({ type: CREATE_USER });