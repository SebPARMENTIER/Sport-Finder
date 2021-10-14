/* eslint-disable import/no-unresolved */
// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import ModalUpdateReview from 'src/components/ModalUpdateReview';
import {
  updateReviewSetInputValueAction,
  updateReviewAction,
  clickOnButtonCloseUpdateReview,
} from 'src/actions/review';

const mapStateToProps = (state) => ({
  newReviewContent: state.review.newReviewContent,
  isUpdateReviewError: state.review.isUpdateReviewError,
});

const mapDispatchToProps = (dispatch) => ({
  changeField: (newValue, name) => {
    dispatch(updateReviewSetInputValueAction(newValue, name));
  },
  handleUpdateReview: () => {
    dispatch(updateReviewAction());
  },
  onClickCloseUpdateReview: () => {
    dispatch(clickOnButtonCloseUpdateReview());
  },
});

// == Export
export default connect(mapStateToProps, mapDispatchToProps)(ModalUpdateReview);
