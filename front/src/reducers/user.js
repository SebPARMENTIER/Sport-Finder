import { 
  SET_USER_INPUT_VALUE,
  CREATE_USER,
  CLICK_ON_BUTTON_SETTINGS,
} from 'src/actions/user';

export const initialState = {
  pseudo: '',
  email: '',
  password: '',
  passwordConfirm: '',
  logged: true,
  openSettings: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_USER_INPUT_VALUE:
      return {
        ...state,
        [action.name]: action.value,
      };
    case CLICK_ON_BUTTON_SETTINGS: {
      console.log('in the reducer');
      return {
        ...state,
        openSettings: !state.openSettings,
      };
    }
    default:
      return state;
  }
};

export default reducer;