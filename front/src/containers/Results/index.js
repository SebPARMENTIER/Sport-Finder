import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Results from 'src/components/Results';

import { getAllReviewsAction } from 'src/actions/review';

const mapStateToProps = (state, { history }) => ({
  results: state.search.results,
  history: history,
  cityCenterLat: state.search.cityCenterLat,
  cityCenterLng: state.search.cityCenterLng,
  buildMap: state.search.buildMap,
  markers: state.search.markers,
});

const mapDispatchToProps = (dispatch) => ({
  getAllReviews: () => {
    dispatch(getAllReviewsAction());
  },
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Results));