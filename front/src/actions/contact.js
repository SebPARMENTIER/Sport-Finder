export const SET_CONTACT_INPUT_VALUE = 'SET_CONTACT_INPUT_VALUE';
export const CONTACT = 'CONTACT';
export const CHANGE_SELECT = 'CHANGE_SELECT';
export const SUBMIT_CONTACT_FORM = 'SUBMIT_CONTACT_FORM';
export const CLOSE_MESSAGE_SUCCESS = 'CLOSE_MESSAGE_SUCCESS';

export const createContactSetInputValueAction = (newValue, name) => ({
  type: SET_CONTACT_INPUT_VALUE,
  value: newValue,
  name: name,
});

export const createContactAction = () => ({ type: CONTACT });

export const changeSelectAction = (newValue) => ({
  type: CHANGE_SELECT,
  value: newValue,
});

export const submitContactForm = () => ({ type: SUBMIT_CONTACT_FORM });

export const closeMessageSuccess = () => ({ type: CLOSE_MESSAGE_SUCCESS })
