import { 
  SET_USER_INPUT_VALUE,
  CREATE_USER,
  CLICK_ON_BUTTON_SETTINGS,
  CREATE_USER_ERROR,
  SET_INPUT_VALUE,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
} from 'src/actions/user';

export const initialState = {
  pseudo: '',
  email: '',
  password: '',
  passwordConfirm: '',
  logged: false,
  openSettings: false,
  isCreateUserError: false,
  isError: false,
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
    };
    case CREATE_USER_ERROR:
      return {
        ...state,
        isCreateUserError: true,
      }
    case SET_INPUT_VALUE:
      return {
        ...state,
        [action.name]: action.value,
      };
      case LOGIN_SUCCESS:
      return {
        ...state,
        ...action.data,
        isError: false,
      };
    case LOGIN_ERROR:
      return {
        ...state,
        isError: true,
      };
    default:
      return state;
  }
};

export default reducer;