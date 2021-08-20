import { connect } from 'react-redux';
import ModalSignUp from 'src/components/ModalSignUp';

import {
  createUserSetInputValueAction,
  createUserAction,
  clickOnButtonLogUp
} from 'src/actions/user';

const mapStateToProps = (state) => ({
  pseudo: state.user.pseudo,
  email: state.user.email,
  password: state.user.password,
  passwordConfirm: state.user.passwordConfirm,
  isCreateUserError: state.user.isCreateUserError,
});

const mapDispatchToProps = (dispatch) => ({
  changeField: (newValue, name) => {
    dispatch(createUserSetInputValueAction(newValue, name));
  },
  handleCreateUser: () => {
    dispatch(createUserAction());
  },
  onClickLogUp: () => {
    console.log('in the container Header');
    const action = clickOnButtonLogUp();
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ModalSignUp);