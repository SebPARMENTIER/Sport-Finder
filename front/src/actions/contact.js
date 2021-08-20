export const SET_CONTACT_INPUT_VALUE = 'SET_CONTACT_INPUT_VALUE';
export const CONTACT = 'CONTACT';

export const createContactSetInputValueAction = (newValue, name) => ({
  type: SET_CONTACT_INPUT_VALUE,
  value: newValue,
  name: name,
});

export const createContactAction = () => ({ type: CONTACT });
