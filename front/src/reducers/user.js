import { SET_USER_INPUT_VALUE, CREATE_USER } from 'src/actions/user';

export const initialState = {
  pseudo: '',
  email: '',
  password: '',
  passwordConfirm: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_USER_INPUT_VALUE:
      return {
        ...state,
        [action.name]: action.value,
      };
    default:
      return state;
  }
};

export default reducer;