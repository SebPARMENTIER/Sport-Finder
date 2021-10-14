/* eslint-disable import/no-unresolved */
// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import ModalEditPassword from 'src/components/ModalEditPassword';
import {
  updatePasswordSetInputValueAction,
  clickOnButtonCloseEditPassword,
  updatePasswordAction,
} from 'src/actions/user';

const mapStateToProps = (state) => ({
  password: state.user.password,
  newPassword: state.user.newPassword,
  newPasswordConfirm: state.user.newPasswordConfirm,
  updatePasswordError: state.user.updatePasswordError,
  isUpdatePasswordSuccess: state.user.isUpdatePasswordSuccess,
  isUpdatePasswordError: state.user.isUpdatePasswordError,
  isUpdatePasswordLengthError: state.user.isUpdatePasswordLengthError,
});

const mapDispatchToProps = (dispatch) => ({
  changeField: (newValue, name) => {
    dispatch(updatePasswordSetInputValueAction(newValue, name));
  },
  onClickCloseEditPassword: () => {
    dispatch(clickOnButtonCloseEditPassword());
  },
  handleUpdatePassword: () => {
    dispatch(updatePasswordAction());
  },
});

const connectedComponent = connect(mapStateToProps, mapDispatchToProps)(ModalEditPassword);

// == Export
export default connectedComponent;
