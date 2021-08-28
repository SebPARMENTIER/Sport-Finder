import { connect } from 'react-redux';
import ModalAddReview from 'src/components/ModalAddReview';
import {
  createReviewSetInputValueAction,
  createReviewAction,
  clickOnButtonCloseAddReview,
} from 'src/actions/review';

const mapStateToProps = (state) => ({
  reviewContent: state.review.reviewContent,
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
})

export default connect(mapStateToProps, mapDispatchToProps)(ModalAddReview);
