import { connect } from 'react-redux';
import SearchForm from 'src/components/SearchForm';
import { createSetInputValueAction, createSearchAction } from 'src/actions/search';

const mapStateToProps = (state) => ({
  city: state.search.city,
  sport: state.search.sport,
})
;

const mapDispatchToProps = (dispatch) => ({
  changeField: (newValue, name) => {
    dispatch(createSetInputValueAction(newValue, name));
  },
  handleSearch: () => {
    dispatch(createSearchAction());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);