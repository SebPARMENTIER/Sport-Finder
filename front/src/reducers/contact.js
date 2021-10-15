/* eslint-disable import/no-unresolved */
// == Import : local
import {
  SET_CONTACT_INPUT_VALUE,
  CHANGE_SELECT,
  SUBMIT_CONTACT_FORM,
  CLOSE_MESSAGE_SUCCESS,
} from 'src/actions/contact';

// == Initial State
export const initialState = {
  civility: '',
  lastname: '',
  firstname: '',
  email: '',
  subject: '',
  content: '',
  submitMessage: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_CONTACT_INPUT_VALUE:
      return {
        ...state,
        [action.name]: action.value,
      };
    case CHANGE_SELECT:
      return {
        ...state,
        civility: action.value,
      };
    case SUBMIT_CONTACT_FORM:
      return {
        ...state,
        submitMessage: true,
      };
    case CLOSE_MESSAGE_SUCCESS:
      return {
        ...state,
        civility: '',
        lastname: '',
        firstname: '',
        email: '',
        subject: '',
        content: '',
        submitMessage: false,
      };
    default:
      return state;
  }
};

// == Export
export default reducer;
