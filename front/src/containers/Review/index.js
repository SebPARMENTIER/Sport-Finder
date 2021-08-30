import { connect } from 'react-redux';
import Review from 'src/components/Review';

import {
  clickOnButtonUpdateReview,
  clickOnButtonDeleteReview,
  IdReviewValue,
} from 'src/actions/review';

const mapDispatchToProps = (dispatch) => ({
  onClickModalUpdateReview: () => {
    dispatch(clickOnButtonUpdateReview());
  },
  onClickModalDeleteReview: () => {
    dispatch(clickOnButtonDeleteReview());
  },
  getIdValue: (value) => {
    dispatch(IdReviewValue(value));
  }
});

export default connect(null, mapDispatchToProps)(Review);
