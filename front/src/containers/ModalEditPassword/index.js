import { connect } from 'react-redux';
import ModalEditPassword from 'src/components/ModalEditPassword';
import { clickOnButtonCloseEditPassword } from 'src/actions/user';

const mapStateToProps = (state) => ({});
  // ajouter le state a utilisé pour le composant '

const mapDispatchToProps = (dispatch) => ({
  onClickCloseEditPassword: () => {
    console.log('in the container ');
    const action = clickOnButtonCloseEditPassword();
    dispatch(action);
  }
});
  // ajouter la fonction utilisé dans le composant

const connectedComponent = connect(mapStateToProps, mapDispatchToProps)(ModalEditPassword);

// on exporte le composant connecté
// => ne pas oublier de l'utiliser à la place du stateless component
export default connectedComponent;
