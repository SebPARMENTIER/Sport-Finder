import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Results from 'src/components/Results';

import { getAllReviewsAction } from 'src/actions/review';
import { clickOnNewSearch, buildMapAction} from 'src/actions/search';

const mapStateToProps = (state, { history }) => ({
  results: state.search.results,
  history: history,
  cityCenterLat: state.search.cityCenterLat,
  cityCenterLng: state.search.cityCenterLng,
  buildMap: state.search.buildMap,
  markers: state.search.markers,
  sport: state.search.sport,
  city: state.search.city,
  isNoResult: state.search.isNoResult,
  reviewsForAvg: state.review.reviewsForAvg,
});

const mapDispatchToProps = (dispatch) => ({
  getAllReviews: () => {
    dispatch(getAllReviewsAction());
  },
  onClickNewSearch: () => {
    dispatch(clickOnNewSearch());
  },
  onBuildMap: () => {
    dispatch(buildMapAction());
  },
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Results));
