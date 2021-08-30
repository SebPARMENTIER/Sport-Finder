import { connect } from 'react-redux';
import ModalDeleteReview from 'src/components/ModalDeleteReview';
import {
  deleteReviewAction,
  clickOnButtonCloseDeleteReview,
} from 'src/actions/review';

const mapStateToProps = (state) => ({
  isDeleteReviewError: state.review.isDeleteReviewError,
});

const mapDispatchToProps = (dispatch) => ({
  onClickValidDeleteReview: () => {
    dispatch(deleteReviewAction());
  },
  onClickCloseDeleteReview: () => {
    dispatch(clickOnButtonCloseDeleteReview());
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(ModalDeleteReview);