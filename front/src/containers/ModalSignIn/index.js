/* eslint-disable import/no-unresolved */
// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import ModalSignIn from 'src/components/ModalSignIn';
import {
  createSetInputValueAction,
  createSubmitAction,
  clickOnButtonLogUp,
  clickOnButtonCloseSignIn,
} from 'src/actions/user';

const mapStateToProps = (state) => ({
  email: state.user.email,
  password: state.user.password,
  isError: state.user.isError,
});

const mapDispatchToProps = (dispatch) => ({
  changeField: (newValue, name) => {
    dispatch(createSetInputValueAction(newValue, name));
  },
  handleLogin: () => {
    dispatch(createSubmitAction());
  },
  onClickLogUp: () => {
    dispatch(clickOnButtonLogUp());
  },
  onClickCloseSignIn: () => {
    dispatch(clickOnButtonCloseSignIn());
  },
});

// == Export
export default connect(mapStateToProps, mapDispatchToProps)(ModalSignIn);
