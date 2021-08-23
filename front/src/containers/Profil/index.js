import { connect } from 'react-redux';
import Profil from 'src/components/Profil';
import { clickOnButtonEditProfil, deleteProfilAction } from 'src/actions/user';

const mapStateToProps = (state) => ({
  openEditProfil: state.user.openEditProfil,
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
});
  // ajouter la fonction utilisé dans le composant

const connectedComponent = connect(mapStateToProps, mapDispatchToProps)(Profil);

// on exporte le composant connecté
// => ne pas oublier de l'utiliser à la place du stateless component
export default connectedComponent;
