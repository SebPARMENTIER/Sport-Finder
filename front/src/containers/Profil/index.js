import { connect } from 'react-redux';
import Profil from 'src/components/Profil';
import {
  clickOnButtonEditProfil,
  deleteProfilAction,
  clickOnButtonEditPassword,
} from 'src/actions/user';

const mapStateToProps = (state) => ({
  openEditProfil: state.user.openEditProfil,
  openEditPassword: state.user.openEditPassword,
  pseudo: state.user.pseudo,
});
  // ajouter le state a utilisé pour le composant '

const mapDispatchToProps = (dispatch) => ({
  onClickModalEditProfil: () => {
    console.log('container');
    const action = clickOnButtonEditProfil();
    dispatch(action);
  },
  onClickDeleteProfil: () => {
    dispatch(deleteProfilAction());
  },
  onClickModalEditPassword: () => {
    const action = clickOnButtonEditPassword();
    dispatch(action);
  }
});
  // ajouter la fonction utilisé dans le composant

const connectedComponent = connect(mapStateToProps, mapDispatchToProps)(Profil);

// on exporte le composant connecté
// => ne pas oublier de l'utiliser à la place du stateless component
export default connectedComponent;
