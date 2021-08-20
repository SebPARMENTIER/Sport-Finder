import { connect } from 'react-redux';
import Header from 'src/components/Header';
import { clickOnButtonSettings, clickOnButtonLogIn, clickOnButtonLogUp } from 'src/actions/user';

const mapStateToProps = (state) => ({
  isLogged: state.user.logged,
});
// ajouter le state a utilisé pour le composant '

const mapDispatchToProps = (dispatch) => ({
  onClickArrow: () => {
    console.log('in the container Header');
    const action = clickOnButtonSettings();
    dispatch(action);
  },
  onClickLogIn: () => {
    console.log('in the container Header');
    const action = clickOnButtonLogIn();
    dispatch(action);
  },
  onClickLogUp: () => {
    console.log('in the container Header');
    const action = clickOnButtonLogUp();
    dispatch(action);
  }
});
// ajouter la fonction utilisé dans le composant

const connectedComponent = connect(mapStateToProps, mapDispatchToProps)(Header);

// on exporte le composant connecté
// => ne pas oublier de l'utiliser à la place du stateless component
export default connectedComponent;