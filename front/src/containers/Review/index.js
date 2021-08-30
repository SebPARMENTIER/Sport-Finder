import { connect } from 'react-redux';
import Review from 'src/components/Review';

import { clickOnButtonUpdateReview } from 'src/actions/review';

const mapDispatchToProps = (dispatch) => ({
  onClickModalUpdateReview: () => {
    dispatch(clickOnButtonUpdateReview());
  },
});

export default connect(null, mapDispatchToProps)(Review);