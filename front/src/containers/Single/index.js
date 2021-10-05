import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Single from 'src/components/Single';

import { findSingle } from 'src/selectors/single';
import {
  clickOnButtonAddReview,
  singleAssociationNameValue,
  singleAssociationKey,
  getAllReviewsForAnAssociationAction,
} from 'src/actions/review';

import {
  clickOnButtonCloseSettings,
} from 'src/actions/user';

const mapStateToProps = (state, { match, history }) => {
  // console.log('match', match);
  // console.log('state', state.search.results);
  const { id } = match.params;
  return ({
    result: findSingle(state.search.results, id),
    sport: state.search.sport,
    openAddReview: state.review.openAddReview,
    associationKey: state.review.associationKey,
    allReviews: state.review.allReviews,
    openUpdateReview: state.review.openUpdateReview,
    openDeleteReview: state.review.openDeleteReview,
    logged: state.user.logged,
    openLogIn: state.user.openLogIn,
    openLogUp: state.user.openLogUp,
    history: history,
  });
};

const mapDispatchToProps = (dispatch) => ({
  onClickModalAddReview: () => {
    dispatch(clickOnButtonAddReview());
  },
  getSingleAssociationName: (value) => {
    dispatch(singleAssociationNameValue(value));
  },
  getSingleAssociationKey: (value) => {
    dispatch(singleAssociationKey(value));
  },
  onClickCloseSettings: () => {
    // console.log('container');
    const action = clickOnButtonCloseSettings();
    dispatch(action);
  },
  handleAverage: () => {
    dispatch(getAllReviewsForAnAssociationAction());
  },
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Single));
