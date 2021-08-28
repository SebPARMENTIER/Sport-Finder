import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Single from 'src/components/Single';

import { findSingle } from 'src/selectors/single';
import { clickOnButtonAddReview } from 'src/actions/review';

const mapStateToProps = (state, { match, history }) => {
  // console.log('match', match);
  // console.log('state', state.search.results);
  const { id } = match.params;
  return ({
    result: findSingle(state.search.results, id),
    sport: state.search.sport,
    openAddReview: state.review.openAddReview,
    history: history,
  });  
};

const mapDispatchToProps = (dispatch) => ({
  onClickModalAddReview: () => {
    dispatch(clickOnButtonAddReview());
  },
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Single));
