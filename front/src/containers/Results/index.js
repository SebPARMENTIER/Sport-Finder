import { connect } from 'react-redux';
import Results from 'src/components/Results';

const mapStateToProps = (state) => ({
  results: state.search.results,
  cityCenterLat: state.search.cityCenterLat,
  cityCenterLng: state.search.cityCenterLng,
  buildMap: state.search.buildMap,
  markers: state.search.markers,
});

export default connect(mapStateToProps)(Results);