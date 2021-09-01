import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import SearchForm from 'src/components/SearchForm';
import {
  createSetSearchSportAction,
  createSearchAction,
  createSetSearchSportSelectAction,
  createSearchCityAction,
  buildMapAction,
} from 'src/actions/search';
import { getAllReviewsAction } from 'src/actions/review';

const mapStateToProps = (state, { history }) => ({
  city: state.search.city,
  sport: state.search.sport,
  results: state.search.results,
  history: history,
});

const mapDispatchToProps = (dispatch) => ({
  changeSelect: (newValue) => {
    dispatch(createSetSearchSportSelectAction(newValue));
  },
  changeField: (newValue) => {
    dispatch(createSetSearchSportAction(newValue));
  },
  handleSearch: () => {
    dispatch(createSearchAction());
  },
  changeFielCity: (newValue, name) => {
    dispatch(createSearchCityAction(newValue, name));
  },
  onClickBuildMap: () => {
    dispatch(buildMapAction());
  },
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchForm));
