import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import SearchForm from 'src/components/SearchForm';
import {
  createSetSearchSportAction,
  createSearchAction,
  createSearchCityAction,
  buildMapAction,
  getErrorFieldNotFull,
} from 'src/actions/search';

import { getAllReviewsForAnAssociationAction } from 'src/actions/review';

const mapStateToProps = (state, { history }) => ({
  city: state.search.city,
  sport: state.search.sport,
  results: state.search.results,
  history: history,
  fullFieldSport: state.search.fullFieldSport,
  fullFieldCity: state.search.fullFieldCity,
  errorField: state.search.errorField,
});

const mapDispatchToProps = (dispatch) => ({
  changeField: (newValue) => {
    dispatch(createSetSearchSportAction(newValue));
  },
  handleSearch: () => {
    dispatch(createSearchAction());
  },
  changeFieldCity: (newValue) => {
    dispatch(createSearchCityAction(newValue));
  },
  onClickBuildMap: () => {
    dispatch(buildMapAction());
  },
  handleAverage: () => {
    dispatch(getAllReviewsForAnAssociationAction());
  },
  onClickError: () => {
    dispatch(getErrorFieldNotFull());
  },

});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchForm));
