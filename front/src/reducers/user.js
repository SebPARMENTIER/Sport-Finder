import { 
  SET_USER_INPUT_VALUE,  
  CLICK_ON_BUTTON_SETTINGS,
  CREATE_USER_ERROR,
  SET_INPUT_VALUE,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  CLICK_ON_BUTTON_LOG_IN,
  CLICK_ON_BUTTON_LOG_UP,
  CLICK_ON_BUTTON_LOG_OUT,
  CLICK_ON_BUTTON_CLOSE_SIGN_IN,
  CLICK_ON_BUTTON_CLOSE_SIGN_UP,
  CLICK_ON_BUTTON_CLOSE_SETTINGS,
  CLICK_ON_BUTTON_EDIT_PROFIL,
} from 'src/actions/user';

export const initialState = {
  pseudo: '',
  email: '',
  password: '',
  passwordConfirm: '',
  logged: false,
  openSettings: false,
  openLogIn: false,
  openLogUp: false,
  openEditProfil: false,
  isCreateUserSuccess: false,
  isCreateUserError: false,
  isError: false,
  desable: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_USER_INPUT_VALUE:
      return {
        ...state,
        [action.name]: action.value,
        isCreateUserSuccess: true,
      };
    case CLICK_ON_BUTTON_SETTINGS: {
      console.log('in the reducer');
      return {
        ...state,
        openSettings: !state.openSettings,
      };
    };
    case CLICK_ON_BUTTON_CLOSE_SETTINGS: {
      console.log('in the reducer');
      return {
        ...state,
        openSettings: !state.openSettings,
      };
    };
    case CLICK_ON_BUTTON_LOG_IN: {
      console.log('in the reducer');
      if( state.openLogUp === true){
        return {
          ...state,
          openLogIn: !state.openLogIn,
          openLogUp: !state.openLogUp,
          desable: true,
        };
      }
      return{
        ...state, 
        openLogIn: !state.openLogIn,
        desable: true,
      }
    };
    case CLICK_ON_BUTTON_LOG_UP: {
      console.log('in the reducer');
      if( state.openLogIn === true){
        return {
          ...state,
          openLogUp: !state.openLogUp,
          openLogIn: !state.openLogIn,
          desable: true
        };
      }
      return {
        ...state,
        openLogUp: !state.openLogUp,
        desable: true
      }
    };
    case CLICK_ON_BUTTON_LOG_OUT:
      return {
        ...state,
        logged: false,
        openSettings: false
      }
    case CLICK_ON_BUTTON_CLOSE_SIGN_IN: 
      return {
        ...state,
        openLogIn: !state.openLogIn,
        desable: false
      }
    case CLICK_ON_BUTTON_CLOSE_SIGN_UP: 
      return {
        ...state,
        openLogUp: !state.openLogUp,
        desable: false
      }
    case CLICK_ON_BUTTON_EDIT_PROFIL:
      return {
        ...state,
        openEditProfil: !state.openEditProfil,
      }
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
        logged: true,
        openLogIn: false,
        desable:false,
        email: '',
        password: '',
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
