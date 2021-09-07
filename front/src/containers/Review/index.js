import { connect } from 'react-redux';
import Review from 'src/components/Review';

import {
  clickOnButtonUpdateReview,
  clickOnButtonDeleteReview,
  IdReviewValue,
} from 'src/actions/review';

const mapStateToProps = (state, ownProps) => ({
  userId: state.user.userId,
  id: ownProps.id,
  createdAt: ownProps.createdAt,
  author: ownProps.author,
  content: ownProps.content,
  star: ownProps.star,
  idUser: ownProps.user_id,
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
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Review);
