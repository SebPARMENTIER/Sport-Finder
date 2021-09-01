import { connect } from 'react-redux';
import Review from 'src/components/Review';

import {
  clickOnButtonUpdateReview,
  clickOnButtonDeleteReview,
  IdReviewValue,
} from 'src/actions/review';

const mapStateToProps = (state) => ({
  userId: state.user.userId,
});

const mapDispatchToProps = (dispatch) => ({
  onClickModalUpdateReview: (value1, value2) => {
    dispatch(clickOnButtonUpdateReview(value1, value2));
  },
  onClickModalDeleteReview: () => {
    dispatch(clickOnButtonDeleteReview());
  },
  getIdValue: (value) => {
    dispatch(IdReviewValue(value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Review);
