import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import sportsData from 'src/assets/sportsData';
import Field from 'src/components/Field';
import './searchForm.scss';

const SearchForm = ({
  city,
  sport,
  changeField,
  handleSearch,
}) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    handleSearch();
  };
  const getFilteredCurrencies = () => {
    return sportsData.filter(
      (sportData) => sportData.name.toLowerCase().includes(
        sport.toLowerCase(),
      ),
    );
  }
  const sportsList = getFilteredCurrencies ();
  return (
    <form className="searchForm" onSubmit={handleSubmit}>
      <div className="searchForm__inputs">
        <Field
          name="city"
          type="text"
          placeholder="Votre ville..."
          value={city}
          onChange={changeField}
        />
        <Field
          name="sport"
          type="text"
          placeholder="Chercher un sport..."
          value={sport}
          onChange={changeField}
        />
      </div>
      <button
        type="submit"
        className="searchForm__button"
      >
        <Link to="/results" className="searchForm_button">
        Rechercher
        </Link>
      </button>
    </form>
  );
}

SearchForm.propTypes = {
  city: PropTypes.string.isRequired,
  sport: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  handleSearch: PropTypes.func.isRequired,
};

export default SearchForm;
