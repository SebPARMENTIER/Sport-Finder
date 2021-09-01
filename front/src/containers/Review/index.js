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
  onClickModalUpdateReview: (value) => {
    dispatch(clickOnButtonUpdateReview(value));
  },
  onClickModalDeleteReview: () => {
    dispatch(clickOnButtonDeleteReview());
  },
  getIdValue: (value) => {
    dispatch(IdReviewValue(value));
  },
});

<<<<<<< HEAD
export default connect(null, mapDispatchToProps)(Review);
=======
export default connect(mapStateToProps, mapDispatchToProps)(Review);
>>>>>>> giovanni
