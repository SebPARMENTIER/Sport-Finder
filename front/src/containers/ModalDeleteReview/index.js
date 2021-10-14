/* eslint-disable import/no-unresolved */
// == Import : npm
import { connect } from 'react-redux';

// == Import : local
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
});

// == Export
export default connect(mapStateToProps, mapDispatchToProps)(ModalDeleteReview);
