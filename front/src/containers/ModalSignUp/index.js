import { connect } from 'react-redux';
import ModalSignUp from 'src/components/ModalSignUp';

import { createUserSetInputValueAction, createUserAction } from 'src/actions/user';

const mapStateToProps = (state) => ({
  pseudo: state.user.pseudo,
  email: state.user.email,
  password: state.user.password,
  passwordConfirm: state.user.passwordConfirm,
});

const mapDispatchToProps = (dispatch) => ({
  changeField: (newValue, name) => {
    dispatch(createUserSetInputValueAction(newValue, name));
  },
  handleCreateUser: () => {
    dispatch(createUserAction());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ModalSignUp);