import { connect } from "react-redux";
import Footer from "src/components/Footer";
import { clickOnButtonCloseSettings } from 'src/actions/user';

const mapStateToProps = (state) => ({
  disable: state.user.disable,
});
// ajouter le state a utilisé pour le composant '

const mapDispatchToProps = (dispatch) => ({
  onClickCloseSettings: () => {
    // console.log('container');
    const action = clickOnButtonCloseSettings();
    dispatch(action);
  },
});
// ajouter la fonction utilisé dans le composant

const connectedComponent = connect(mapStateToProps, mapDispatchToProps)(Footer);

// on exporte le composant connecté
// => ne pas oublier de l'utiliser à la place du stateless component
export default connectedComponent;
