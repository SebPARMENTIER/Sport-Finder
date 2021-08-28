import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Results from 'src/components/Results';

import { getAllReviewsAction } from 'src/actions/review';

const mapStateToProps = (state, { history }) => {
  return ({
    results: state.search.results,
    history: history,
  })  
};

const mapDispatchToProps = (dispatch) => ({
  getAllReviews: () => {
    dispatch(getAllReviewsAction());
  },
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Results));
