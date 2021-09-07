import { connect } from 'react-redux';
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

export default connect(mapStateToProps, mapDispatchToProps)(ModalUpdateReview);
