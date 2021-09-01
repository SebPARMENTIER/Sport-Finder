import { connect } from 'react-redux';
import StarRatingStatic from 'src/components/StarRatingStatic';

const mapStateToProps = (state) => ({
  
});
  // ajouter le state a utilisé pour le composant '

const mapDispatchToProps = (dispatch) => ({
});
  // ajouter la fonction utilisé dans le composant

const connectedComponent = connect(mapStateToProps, mapDispatchToProps)(StarRatingStatic);

// on exporte le composant connecté
// => ne pas oublier de l'utiliser à la place du stateless component
export default connectedComponent;
