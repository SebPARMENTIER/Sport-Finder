import { connect } from 'react-redux';
import ModalEditProfil from 'src/components/ModalEditProfil';
import { clickOnButtonCloseEditProfil } from 'src/actions/user';

const mapStateToProps = (state) => ({});
  // ajouter le state a utilisé pour le composant '

const mapDispatchToProps = (dispatch) => ({
  onClickCloseEditProfil: () => {
    console.log('in the container Header');
    const action = clickOnButtonCloseEditProfil();
    dispatch(action);
  }
});
  // ajouter la fonction utilisé dans le composant

const connectedComponent = connect(mapStateToProps, mapDispatchToProps)(ModalEditProfil);

// on exporte le composant connecté
// => ne pas oublier de l'utiliser à la place du stateless component
export default connectedComponent;