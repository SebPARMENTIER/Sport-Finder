import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import SearchForm from 'src/components/SearchForm';
import {
  createSetSearchSportAction,
  createSearchAction,
  createSetSearchSportSelectAction,
} from 'src/actions/search';

const mapStateToProps = (state, { history }) => {
  // console.log('history', history);
  return ({
    city: state.search.city,
    sport: state.search.sport,
    results: state.search.results,
    history: history,
  })
};

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
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchForm)) ;
