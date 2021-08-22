import { connect } from 'react-redux';
import ModalEditProfil from 'src/components/ModalEditProfil';

const mapStateToProps = (state) => ({});
  // ajouter le state a utilisé pour le composant '

const mapDispatchToProps = () => ({});
  // ajouter la fonction utilisé dans le composant

const connectedComponent = connect(mapStateToProps, mapDispatchToProps)(ModalEditProfil);

// on exporte le composant connecté
// => ne pas oublier de l'utiliser à la place du stateless component
export default connectedComponent;