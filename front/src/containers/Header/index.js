import { connect } from 'react-redux';
import Header from 'src/components/Header';
import {
  clickOnButtonSettings,
  clickOnButtonLogIn,
  clickOnButtonLogUp,
  clickOnButtonCloseSettings,
} from 'src/actions/user';

import { clickOnNewSearch } from 'src/actions/search';

const mapStateToProps = (state) => ({
  isLogged: state.user.logged,
  pseudo: state.user.pseudo,
  openSettings: state.user.openSettings,
});
// ajouter le state a utilisé pour le composant '

const mapDispatchToProps = (dispatch) => ({
  onClickArrow: () => {
    // console.log('in the container Header');
    const action = clickOnButtonSettings();
    dispatch(action);
  },
  onClickLogIn: () => {
    // console.log('in the container Header');
    const action = clickOnButtonLogIn();
    dispatch(action);
  },
  onClickLogUp: () => {
    // console.log('in the container Header');
    const action = clickOnButtonLogUp();
    dispatch(action);
  },
  onClickCloseSettings: () => {
    // console.log('container');
    const action = clickOnButtonCloseSettings();
    dispatch(action);
  },
  onClickNewSearch: () => {
    dispatch(clickOnNewSearch());
  },
});
// ajouter la fonction utilisé dans le composant

const connectedComponent = connect(mapStateToProps, mapDispatchToProps)(Header);

// on exporte le composant connecté
// => ne pas oublier de l'utiliser à la place du stateless component
export default connectedComponent;