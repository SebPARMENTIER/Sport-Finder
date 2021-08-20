import { connect } from 'react-redux';
import ModalSignIn from 'src/components/ModalSignIn';

import { createSetInputValueAction, createSubmitAction, clickOnButtonLogUp } from 'src/actions/user';

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
    console.log('in the container Header');
    const action = clickOnButtonLogUp();
    dispatch(action);
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ModalSignIn);