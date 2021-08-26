import { connect } from 'react-redux';
import Single from 'src/components/Single';

import { findSingle } from 'src/selectors/single';

const mapStateToProps = (state, { match }) => {
  console.log('match', match);
  console.log('state', state.search.results);
  const { id } = match.params;
  return ({
    result: findSingle(state.search.results, id),
    sport: state.search.sport,
  });  
};

export default connect(mapStateToProps)(Single);
