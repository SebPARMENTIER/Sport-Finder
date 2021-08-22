import { connect } from 'react-redux';
import Profil from 'src/components/Profil';
import { clickOnButtonEditProfil } from 'src/actions/user';

const mapStateToProps = (state) => ({});
  // ajouter le state a utilisé pour le composant '

const mapDispatchToProps = (dispatch) => ({
  onClickModalEditProfil: () => {
    console.log('container');
    const action = clickOnButtonEditProfil();
    dispatch(action);
  }
});
  // ajouter la fonction utilisé dans le composant

const connectedComponent = connect(mapStateToProps, mapDispatchToProps)(Profil);

// on exporte le composant connecté
// => ne pas oublier de l'utiliser à la place du stateless component
export default connectedComponent;