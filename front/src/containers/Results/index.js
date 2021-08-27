import { connect } from 'react-redux';
import Results from 'src/components/Results';

const mapStateToProps = (state) => ({
  results: state.search.results,
});

export default connect(mapStateToProps)(Results);