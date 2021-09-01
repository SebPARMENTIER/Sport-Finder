import { connect } from 'react-redux';
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
  // ajouter le state a utilisé pour le composant '

const mapDispatchToProps = (dispatch) => ({
  changeField: (newValue, name) => {
    dispatch(updatePasswordSetInputValueAction(newValue, name));
  },
  onClickCloseEditPassword: () => {
    // console.log('in the container ');
    const action = clickOnButtonCloseEditPassword();
    dispatch(action);
  },
  handleUpdatePassword: () => {
    dispatch(updatePasswordAction());
  },
});
  // ajouter la fonction utilisé dans le composant

const connectedComponent = connect(mapStateToProps, mapDispatchToProps)(ModalEditPassword);

// on exporte le composant connecté
// => ne pas oublier de l'utiliser à la place du stateless component
export default connectedComponent;
