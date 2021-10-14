/* eslint-disable import/no-unresolved */
// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import ModalAddReview from 'src/components/ModalAddReview';
import {
  createReviewSetInputValueAction,
  createReviewAction,
  clickOnButtonCloseAddReview,
} from 'src/actions/review';

const mapStateToProps = (state) => ({
  reviewContent: state.review.reviewContent,
  isCreateReviewError: state.review.isCreateReviewError,
});

const mapDispatchToProps = (dispatch) => ({
  changeField: (newValue, name) => {
    dispatch(createReviewSetInputValueAction(newValue, name));
  },
  handleReview: () => {
    dispatch(createReviewAction());
  },
  onClickCloseAddReview: () => {
    dispatch(clickOnButtonCloseAddReview());
  },
});

// == Export
export default connect(mapStateToProps, mapDispatchToProps)(ModalAddReview);
