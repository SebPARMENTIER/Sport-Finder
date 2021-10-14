/* eslint-disable import/no-unresolved */
// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import StarRating from 'src/components/StarRating';
import { setStarValue } from 'src/actions/review';

const mapStateToProps = (state) => ({
  rating: Number(state.review.rating),
});

const mapDispatchToProps = (dispatch) => ({
  onClickStar: (value) => {
    dispatch(setStarValue(value));
  },
});

const connectedComponent = connect(mapStateToProps, mapDispatchToProps)(StarRating);

// == Export
export default connectedComponent;
