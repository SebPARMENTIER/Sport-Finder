/* eslint-disable import/no-unresolved */
// == Import : npm
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

// == Import : local
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
    dispatch(clickOnButtonCloseSettings());
  },
  handleAverage: () => {
    dispatch(getAllReviewsForAnAssociationAction());
  },
});

// == Export and use withRouter to recover Url's params Id
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Single));
