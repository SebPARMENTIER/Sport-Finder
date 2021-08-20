import { connect } from 'react-redux';
import Contact from 'src/components/Contact';

const mapStateToProps = (state) => ({
  openLogIn: state.user.openLogIn,
  openLogUp: state.user.openLogUp,
});
  // ajouter le state a utilisé pour le composant '

const mapDispatchToProps = () => ({});
  // ajouter la fonction utilisé dans le composant

const connectedComponent = connect(mapStateToProps, mapDispatchToProps)(Contact);

// on exporte le composant connecté
// => ne pas oublier de l'utiliser à la place du stateless component
export default connectedComponent;