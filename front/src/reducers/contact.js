import {
  SET_CONTACT_INPUT_VALUE,
  CONTACT,
} from 'src/actions/contact';

export const initialState = {
  civility: '',
  lastname: '',
  firstname: '',
  email: '',
  subject: '',
  content: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_CONTACT_INPUT_VALUE:
      return {
        ...state,
        [action.name]: action.value,
      };
    // case CONTACT:
    //   return {

    //   }
    default:
      return state;
  }
};

export default reducer;
