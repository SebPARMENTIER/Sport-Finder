import { connect } from 'react-redux';
import Footer from 'src/components/Footer';

const mapStateToProps = (state) => ({
  desable: state.user.desable,
});
  // ajouter le state a utilisé pour le composant '

const mapDispatchToProps = () => ({});
  // ajouter la fonction utilisé dans le composant

const connectedComponent = connect(mapStateToProps, mapDispatchToProps)(Footer);

// on exporte le composant connecté
// => ne pas oublier de l'utiliser à la place du stateless component
export default connectedComponent;