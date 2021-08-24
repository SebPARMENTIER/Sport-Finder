import { 
  SET_USER_INPUT_VALUE,  
  CLICK_ON_BUTTON_SETTINGS,
  CREATE_USER_SUCCESS,
  CREATE_USER_ERROR,
  CREATE_PASSWORD_ERROR,
  SET_INPUT_VALUE,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  CLICK_ON_BUTTON_LOG_IN,
  CLICK_ON_BUTTON_LOG_UP,
  CLICK_ON_BUTTON_LOG_OUT,
  CLICK_ON_BUTTON_DELETE_PROFILE,
  CLICK_ON_BUTTON_EDIT_PROFIL,
  CLICK_ON_BUTTON_EDIT_PASSWORD,
  CLICK_ON_BUTTON_CLOSE_SIGN_IN,
  CLICK_ON_BUTTON_CLOSE_SIGN_UP,
  CLICK_ON_BUTTON_CLOSE_SETTINGS,
  CLICK_ON_BUTTON_CLOSE_EDIT_PROFIL,
  CLICK_ON_BUTTON_CLOSE_EDIT_PASSWORD,
  CLICK_ON_BUTTON_CLOSE_DELETE_PROFILE,
  DELETE_PROFILE_SUCCESS,
  DELETE_PROFILE_ERROR,
  DELETE_PASSWORD_CONFIRM_VALUE,
} from 'src/actions/user';

export const initialState = {
  userId:'',
  pseudo: '',
  email: '',
  password: '',
  passwordConfirm: '',
  passwordError: false,
  logged: false,
  openSettings: false,
  openLogIn: false,
  openLogUp: false,
  openEditProfil: false,
  openEditPassword: false,
  openDeleteProfile: false,
  isCreateUserSuccess: false,
  isCreateUserError: false,
  isError: false,
  isDeleteProfileSuccess: false,
  isDeleteProfileError: false,
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
    case CLICK_ON_BUTTON_CLOSE_SETTINGS: {
      console.log('in the reducer');
      return {
        ...state,
        openSettings: false,
      };
    };
    case CLICK_ON_BUTTON_LOG_IN: {
      console.log('in the reducer');
      if( state.openLogUp === true){
        return {
          ...state,
          openLogIn: !state.openLogIn,
          openLogUp: !state.openLogUp,
        };
      }
      return{
        ...state, 
        openLogIn: !state.openLogIn,
      }
    };
    case CLICK_ON_BUTTON_LOG_UP: {
      console.log('in the reducer');
      if( state.openLogIn === true){
        return {
          ...state,
          openLogUp: !state.openLogUp,
          openLogIn: !state.openLogIn,
        };
      }
      return {
        ...state,
        openLogUp: !state.openLogUp,
      }
    };
    case CLICK_ON_BUTTON_LOG_OUT:
      return {
        ...state,
        logged: false,
        openSettings: false,
        pseudo: '',
        userId: '',
      }
    case CLICK_ON_BUTTON_DELETE_PROFILE:
      return {
        ...state,
        openDeleteProfile: true,
      }
    case CLICK_ON_BUTTON_CLOSE_SIGN_IN: 
      return {
        ...state,
        openLogIn: !state.openLogIn,
        isError: false,
        email:"",
        password: "",
      }
    case CLICK_ON_BUTTON_CLOSE_SIGN_UP: 
      return {
        ...state,
        openLogUp: !state.openLogUp,
        isCreateUserSuccess: false,
        isCreateUserError: false,
        email: "",
        password:"",
      }
    case CLICK_ON_BUTTON_CLOSE_EDIT_PROFIL:
      return {
        ...state,
        openEditProfil: false,
      }
    case CLICK_ON_BUTTON_CLOSE_EDIT_PASSWORD:
      return {
        ...state,
        openEditPassword: false,
      }
    case CLICK_ON_BUTTON_CLOSE_DELETE_PROFILE:
      return {
        ...state,
        openDeleteProfile: false,
        isDeleteProfileError: false,
        password: '',
      }
    case CLICK_ON_BUTTON_EDIT_PROFIL:
      return {
        ...state,
        openEditProfil: !state.openEditProfil,
      }
    case CLICK_ON_BUTTON_EDIT_PASSWORD:
      return {
        ...state,
        openEditPassword: !state.openEditPassword,
      }
    case CREATE_USER_SUCCESS:
      return {
        ...state,
        isCreateUserSuccess: action.data.isCreateUserSuccess,
        email: '',
        pseudo: '',
        password: '',
        passwordConfirm: '',
        passwordError: false,
        isCreateUserError: false,
      }
    case CREATE_USER_ERROR:
      return {
        ...state,
        isCreateUserError: true,
      }
    case CREATE_PASSWORD_ERROR:
      return {
        ...state,
        passwordError: true,
      }
    case SET_INPUT_VALUE:
      return {
        ...state,
        [action.name]: action.value,
      };
    case LOGIN_SUCCESS:
      const { id, pseudo } = action.data.data;
      return {
        ...state,
        userId: id,
        pseudo,
        isError: false,
        logged: true,
        openLogIn: false,
        email: '',
        password: '',
      };
    case LOGIN_ERROR:
      return {
        ...state,
        isError: true,
      };
    case DELETE_PROFILE_SUCCESS:
      return {
        ...state,
        isDeleteProfileSuccess: action.data.OK,
        isDeleteProfileError: false,
        logged: false,
        id: '',
        password: '',
      }
    case DELETE_PROFILE_ERROR:
      return {
        ...state,
        isDeleteProfileError: true,
      }
    case DELETE_PASSWORD_CONFIRM_VALUE:
      return {
        ...state,
        [action.name]: action.value,
      };
    default:
      return state;
  }
};

export default reducer;
