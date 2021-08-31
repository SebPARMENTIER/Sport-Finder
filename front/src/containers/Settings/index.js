import { connect } from 'react-redux';
import Settings from 'src/components/Settings';
import { clickOnButtonCloseSettings, clickOnButtonLogOut } from 'src/actions/user';

const mapStateToProps = (state) => ({
  open: state.user.openSettings
});
  // ajouter le state a utilisé pour le composant '

const mapDispatchToProps = (dispatch) => ({
  onClickCloseSettings: () => {
    // console.log('container');
    const action = clickOnButtonCloseSettings();
    dispatch(action);
  },
  onClickLogOut: () => {
    // console.log('container');
    const action = clickOnButtonLogOut();
    dispatch(action);
  },
});
  // ajouter la fonction utilisé dans le composant

const connectedComponent = connect(mapStateToProps, mapDispatchToProps)(Settings);

// on exporte le composant connecté
// => ne pas oublier de l'utiliser à la place du stateless component
export default connectedComponent;
