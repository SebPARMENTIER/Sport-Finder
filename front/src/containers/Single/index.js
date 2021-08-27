import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Single from 'src/components/Single';

import { findSingle } from 'src/selectors/single';

const mapStateToProps = (state, { match, history }) => {
  // console.log('match', match);
  // console.log('state', state.search.results);
  const { id } = match.params;
  return ({
    result: findSingle(state.search.results, id),
    sport: state.search.sport,
    history: history,
  });  
};

export default withRouter(connect(mapStateToProps)(Single));