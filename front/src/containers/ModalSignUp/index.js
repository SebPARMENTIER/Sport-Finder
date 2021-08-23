import { connect } from 'react-redux';
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
  isCreateUserSuccess: state.user.isCreateUserSuccess,
  isCreateUserError: state.user.isCreateUserError,
});

const mapDispatchToProps = (dispatch) => ({
  changeField: (newValue, name) => {
    dispatch(createUserSetInputValueAction(newValue, name));
  },
  handleCreateUser: () => {
    dispatch(createUserAction());
  },
  onClickCloseSignUp: () => {
    console.log('in the container Header');
    const action = clickOnButtonCloseSignUp();
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ModalSignUp);
