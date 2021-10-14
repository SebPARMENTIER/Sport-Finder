/* eslint-disable import/no-unresolved */
// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import ModalSignUp from 'src/components/ModalSignUp';
import {
  createUserSetInputValueAction,
  createUserAction,
  clickOnButtonCloseSignUp,
} from 'src/actions/user';

const mapStateToProps = (state) => ({
  pseudo: state.user.pseudo,
  email: state.user.email,
  password: state.user.password,
  passwordConfirm: state.user.passwordConfirm,
  passwordError: state.user.passwordError,
  isCreateUserSuccess: state.user.isCreateUserSuccess,
  isCreateUserError: state.user.isCreateUserError,
  isCreatePasswordLengthError: state.user.isCreatePasswordLengthError,
});

const mapDispatchToProps = (dispatch) => ({
  changeField: (newValue, name) => {
    dispatch(createUserSetInputValueAction(newValue, name));
  },
  handleCreateUser: () => {
    dispatch(createUserAction());
  },
  onClickCloseSignUp: () => {
    dispatch(clickOnButtonCloseSignUp());
  },
});

// == Export
export default connect(mapStateToProps, mapDispatchToProps)(ModalSignUp);
