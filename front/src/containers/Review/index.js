import { connect } from 'react-redux';
import Review from 'src/components/Review';

import {
  clickOnButtonUpdateReview,
  clickOnButtonDeleteReview,
} from 'src/actions/review';

const mapDispatchToProps = (dispatch) => ({
  onClickModalUpdateReview: () => {
    dispatch(clickOnButtonUpdateReview());
  },
  onClickModalDeleteReview: () => {
    dispatch(clickOnButtonDeleteReview());
  },
});

export default connect(null, mapDispatchToProps)(Review);