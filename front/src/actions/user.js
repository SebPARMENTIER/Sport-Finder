export const SET_USER_INPUT_VALUE = 'SET_USER_INPUT_VALUE';
export const CLICK_ON_BUTTON_SETTINGS = 'CLICK_ON_BUTTON_SETTINGS';
export const CLICK_ON_BUTTON_CLOSE_SETTINGS = 'CLICK_ON_BUTTON_CLOSE_SETTINGS';
export const CREATE_USER = 'CREATE_USER';
export const CREATE_USER_SUCCESS = 'CREATE_USER_SUCCESS';
export const CREATE_USER_ERROR = 'CREATE_USER_ERROR';
export const CREATE_PASSWORD_ERROR = 'CREATE_PASSWORD_ERROR';
export const CREATE_PASSWORD_LENGTH_ERROR = 'CREATE_PASSWORD_LENGTH_ERROR';
export const SET_INPUT_VALUE = 'SET_INPUT_VALUE';
export const SUBMIT_LOGIN = 'SUBMIT_LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const CLICK_ON_BUTTON_LOG_IN = 'CLICK_ON_BUTTON_LOG_IN';
export const CLICK_ON_BUTTON_LOG_UP = 'CLICK_ON_BUTTON_LOG_UP';
export const CLICK_ON_BUTTON_LOG_OUT = 'CLICK_ON_BUTTON_LOG_OUT';
export const CLICK_ON_BUTTON_EDIT_PROFILE = 'CLICK_ON_BUTTON_EDIT_PROFILE';
export const CLICK_ON_BUTTON_EDIT_PASSWORD = 'CLICK_ON_BUTTON_EDIT_PASSWORD';
export const CLICK_ON_BUTTON_DELETE_PROFILE = 'CLICK_ON_BUTTON_DELETE_PROFILE';
export const CLICK_ON_BUTTON_PRIVACY_DATA = 'CLICK_ON_BUTTON_PRIVACY_DATA';
export const CLICK_ON_BUTTON_CLOSE_SIGN_IN = 'CLICK_ON_BUTTON_CLOSE_SIGN_IN';
export const CLICK_ON_BUTTON_CLOSE_SIGN_UP = 'CLICK_ON_BUTTON_CLOSE_SIGN_UP';
export const CLICK_ON_BUTTON_CLOSE_EDIT_PROFILE = 'CLICK_ON_BUTTON_CLOSE_EDIT_PROFILE';
export const CLICK_ON_BUTTON_CLOSE_EDIT_PASSWORD = 'CLICK_ON_BUTTON_CLOSE_EDIT_PASSWORD';
export const CLICK_ON_BUTTON_CLOSE_DELETE_PROFILE = 'CLICK_ON_BUTTON_CLOSE_DELETE_PROFILE';
export const CLICK_ON_BUTTON_CLOSE_PRIVACY_DATA = 'CLICK_ON_BUTTON_CLOSE_PRIVACY_DATA';
export const DELETE_PROFILE = 'DELETE_PROFILE';
export const DELETE_PROFILE_SUCCESS = 'DELETE_PROFILE_SUCCESS';
export const DELETE_PROFILE_ERROR = 'DELETE_PROFILE_ERROR';
export const DELETE_PASSWORD_CONFIRM_VALUE = 'DELETE_PASSWORD_CONFIRM_VALUE';
export const UPDATE_PSEUDO_VALUE = 'UPDATE_PSEUDO_VALUE';
export const UPDATE_PSEUDO = 'UPDATE_PSEUDO';
export const UPDATE_PSEUDO_SUCCESS = 'UPDATE_PSEUDO_SUCCESS';
export const UPDATE_ERROR = 'UPDATE_ERROR';
export const UPDATE_PASSWORD_VALUE = 'UPDATE_PASSWORD_VALUE';
export const UPDATE_PASSWORD = 'UPDATE_PASSWORD';
export const UPDATE_PASSWORD_CONFIRM_ERROR = 'UPDATE_PASSWORD_CONFIRM_ERROR';
export const UPDATE_PASSWORD_SUCCESS = 'UPDATE_PASSWORD_SUCCESS';
export const UPDATE_PASSWORD_ERROR = 'UPDATE_PASSWORD_ERROR';
export const UPDATE_PASSWORD_LENGTH_ERROR = 'UPDATE_PASSWORD_LENGTH_ERROR';
export const CLOSE_MODAL_DELETE = 'CLOSE_MODAL_DELETE';

export const createUserSetInputValueAction = (newValue, name) => ({
  type: SET_USER_INPUT_VALUE,
  value: newValue,
  name: name,
});

export const clickOnButtonSettings = () => ({
  type: CLICK_ON_BUTTON_SETTINGS,
});

export const clickOnButtonCloseSettings = () => ({
  type: CLICK_ON_BUTTON_CLOSE_SETTINGS,
});

export const clickOnButtonLogIn = () => ({
  type: CLICK_ON_BUTTON_LOG_IN,
});

export const clickOnButtonLogUp = () => ({
  type: CLICK_ON_BUTTON_LOG_UP,
});

export const clickOnButtonEditProfile = () => ({
  type: CLICK_ON_BUTTON_EDIT_PROFILE,
});

export const clickOnButtonEditPassword = () => ({
  type: CLICK_ON_BUTTON_EDIT_PASSWORD,
});

export const clickOnButtonLogOut = () => ({
  type: CLICK_ON_BUTTON_LOG_OUT,
});

export const clickOnButtonDeleteProfile = () => ({
  type: CLICK_ON_BUTTON_DELETE_PROFILE,
});

export const clickOnButtonPrivacyData = () => ({
  type: CLICK_ON_BUTTON_PRIVACY_DATA,
});

export const clickOnButtonCloseSignIn = () => ({
  type: CLICK_ON_BUTTON_CLOSE_SIGN_IN,
});

export const clickOnButtonCloseSignUp = () => ({
  type: CLICK_ON_BUTTON_CLOSE_SIGN_UP,
});

export const clickOnButtonCloseEditProfile = () => ({
  type: CLICK_ON_BUTTON_CLOSE_EDIT_PROFILE,
});

export const clickOnButtonCloseEditPassword = () => ({
  type: CLICK_ON_BUTTON_CLOSE_EDIT_PASSWORD,
});

export const clickOnButtonCloseDeleteProfile = () => ({
  type: CLICK_ON_BUTTON_CLOSE_DELETE_PROFILE,
});

export const clickOnButtonClosePrivacyData = () => ({
  type: CLICK_ON_BUTTON_CLOSE_PRIVACY_DATA,
});

export const createUserAction = () => ({ type: CREATE_USER });

export const createUserSuccessAction = (data) => ({ type: CREATE_USER_SUCCESS, data });

export const createUserErrorAction = () => ({ type: CREATE_USER_ERROR });

export const createPasswordErrorAction = () => ({ type: CREATE_PASSWORD_ERROR });

export const createPasswordLengthError = () => ({ type: CREATE_PASSWORD_LENGTH_ERROR });

export const createSetInputValueAction = (newValue, name) => ({
  type: SET_INPUT_VALUE,
  value: newValue,
  name: name,
});

export const createSubmitAction = () => ({ type: SUBMIT_LOGIN });

export const createLoginSuccessAction = (data) => ({ type: LOGIN_SUCCESS, data });

export const createLoginErrorAction = () => ({ type: LOGIN_ERROR });

export const deleteProfileAction = () => ({ type: DELETE_PROFILE });

export const deleteProfileSuccessAction = (data) => ({ type: DELETE_PROFILE_SUCCESS, data });

export const deleteProfileErrorAction = () => ({ type: DELETE_PROFILE_ERROR });

export const deleteConfirmSetInputValueAction = (newValue, name) => ({
  type: DELETE_PASSWORD_CONFIRM_VALUE,
  value: newValue,
  name: name,
});

export const updatePseudoSetInputValueAction = (newValue, name) => ({
  type: UPDATE_PSEUDO_VALUE,
  value: newValue,
  name: name,
});

export const updatePseudoAction = () => ({ type: UPDATE_PSEUDO });

export const updatePseudoSuccessAction = (data) => ({ type: UPDATE_PSEUDO_SUCCESS, data });

export const updatePseudoErrorAction = () => ({ type: UPDATE_ERROR });

export const updatePasswordSetInputValueAction = (newValue, name) => ({
  type: UPDATE_PASSWORD_VALUE,
  value: newValue,
  name: name,
});

export const updatePasswordAction = () => ({ type: UPDATE_PASSWORD });

export const updatePasswordConfirmErrorAction = () => ({ type: UPDATE_PASSWORD_CONFIRM_ERROR });

export const updatePasswordSuccessAction = () => ({ type: UPDATE_PASSWORD_SUCCESS });

export const updatePasswordErrorAction = () => ({ type: UPDATE_PASSWORD_ERROR });

export const updatePasswordLengthError = () => ({ type: UPDATE_PASSWORD_LENGTH_ERROR });

export const closeModalDelete = () => ({ type: CLOSE_MODAL_DELETE });
