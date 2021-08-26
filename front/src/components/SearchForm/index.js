import React from 'react';
import PropTypes from 'prop-types';

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
      <div className="searchForm__list" >
        {sportsList.map((sportList) => (
          <li
            key={sportList.name}
            className="searchForm__list__item"
          >
            {sportList.name}
          </li>
        ))}
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
  handleSearch: PropTypes.func.isRequired,
};

export default SearchForm;
