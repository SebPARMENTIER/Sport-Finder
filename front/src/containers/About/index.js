import { connect } from 'react-redux';
import About from 'src/components/About';

const mapStateToProps = (state) => ({
  openLogIn: state.user.openLogIn,
});
  // ajouter le state a utilisé pour le composant '

const mapDispatchToProps = () => ({});
  // ajouter la fonction utilisé dans le composant

const connectedComponent = connect(mapStateToProps, mapDispatchToProps)(About);

// on exporte le composant connecté
// => ne pas oublier de l'utiliser à la place du stateless component
export default connectedComponent;