import React from 'react';
import PropTypes from 'prop-types';
import { ReactSearchAutocomplete } from 'react-search-autocomplete';

import sportsData from 'src/assets/sportsData';
import Field from 'src/components/Field';
import './searchForm.scss';

const SearchForm = ({
  city,
  sport,
  changeField,
  changeSelect,
  handleSearch,
  changeFielCity,
  history,
}) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    handleSearch();
    history.push('/results')
  };
  return (
    <form className="searchForm" onSubmit={handleSubmit}>
      <div className="searchForm__inputs">
        <div className='searchForm__inputs__sport'>
          <ReactSearchAutocomplete
            items={sportsData}
            onSearch={changeField}
            onSelect={changeSelect}
            autoFocus
            name="sport"
            type="text"
            placeholder="Chercher un sport..."
            value={sport}
            styling={
              {
                borderRadius: "5px",
                with:"90%",
                fontSize: "23px",
                height:"46px",
              }
            }
          />
        </div>
        <Field
          name="city"
          type="text"
          className=""
          placeholder="Votre ville..."
          value={city}
          onChange={changeFielCity}
        />
      </div>
      
      <button
        type="submit"
        className="searchForm__button"
      >
        Rechercher
      </button>
    </form>
  );
}

SearchForm.propTypes = {
  city: PropTypes.string.isRequired,
  sport: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  changeSelect: PropTypes.func.isRequired,
  handleSearch: PropTypes.func.isRequired,
  changeFielCity: PropTypes.func.isRequired,
  history:  PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default SearchForm;
