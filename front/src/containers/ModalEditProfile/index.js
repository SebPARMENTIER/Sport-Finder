import { connect } from 'react-redux';
import ModalEditProfile from 'src/components/ModalEditProfile';
import {
  updatePseudoSetInputValueAction,
  clickOnButtonCloseEditProfile,
  updatePseudoAction,
} from 'src/actions/user';

const mapStateToProps = (state) => ({
  password: state.user.password,
  newPseudo: state.user.newPseudo,
  isUpdatePseudoSuccess: state.user.isUpdatePseudoSuccess,
  isUpdatePseudoError: state.user.isUpdatePseudoError,
});
  // ajouter le state a utilisé pour le composant '

const mapDispatchToProps = (dispatch) => ({
  changeField: (newValue, name) => {
    dispatch(updatePseudoSetInputValueAction(newValue, name));
  },
  onClickCloseEditProfile: () => {
    // console.log('in the container Header');
    const action = clickOnButtonCloseEditProfile();
    dispatch(action);
  },
  handleUpdatePseudo: () => {
    dispatch(updatePseudoAction());
  },
});
  // ajouter la fonction utilisé dans le composant

const connectedComponent = connect(mapStateToProps, mapDispatchToProps)(ModalEditProfile);

// on exporte le composant connecté
// => ne pas oublier de l'utiliser à la place du stateless component
export default connectedComponent;
