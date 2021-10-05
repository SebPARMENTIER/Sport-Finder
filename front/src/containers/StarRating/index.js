import { connect } from 'react-redux';
import StarRating from 'src/components/StarRating';
import { setStarValue } from 'src/actions/review';
const mapStateToProps = (state) => ({
  rating: Number(state.review.rating),
});
  // ajouter le state a utilisé pour le composant '

const mapDispatchToProps = (dispatch) => ({

  onClickStar: (value) => {
    // console.log('container valeur', value);
    dispatch(setStarValue(value));
  },
});
  // ajouter la fonction utilisé dans le composant

const connectedComponent = connect(mapStateToProps, mapDispatchToProps)(StarRating);

// on exporte le composant connecté
// => ne pas oublier de l'utiliser à la place du stateless component
export default connectedComponent;
