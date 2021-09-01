import { connect } from 'react-redux';
import ModalEditProfil from 'src/components/ModalEditProfil';
import {
  updatePseudoSetInputValueAction,
  clickOnButtonCloseEditProfil,
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
  onClickCloseEditProfil: () => {
    // console.log('in the container Header');
    const action = clickOnButtonCloseEditProfil();
    dispatch(action);
  },
  handleUpdatePseudo: () => {
    dispatch(updatePseudoAction());
  },
});
  // ajouter la fonction utilisé dans le composant

const connectedComponent = connect(mapStateToProps, mapDispatchToProps)(ModalEditProfil);

// on exporte le composant connecté
// => ne pas oublier de l'utiliser à la place du stateless component
export default connectedComponent;
