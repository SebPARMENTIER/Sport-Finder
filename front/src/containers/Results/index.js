import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Results from 'src/components/Results';

import { getAllReviewsAction } from 'src/actions/review';
import { clickOnNewSearch } from 'src/actions/search';

const mapStateToProps = (state, { history }) => {
  return ({
    results: state.search.results,
    history: history,
    sport: state.search.sport,
    city: state.search.city,
    isNoResult: state.search.isNoResult,
  })  
};

const mapDispatchToProps = (dispatch) => ({
  getAllReviews: () => {
    dispatch(getAllReviewsAction());
  },
  onClickNewSearch: () => {
    dispatch(clickOnNewSearch());
  },
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Results));
