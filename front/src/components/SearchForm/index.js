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
  history,
}) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    handleSearch();
    history.push('/results')
  };
  const getFilteredCurrencies = () => {
    return sportsData.filter(
      (sportData) => sportData.name.toLowerCase().includes(
        sport.toLowerCase(),
      ),
    );
  };
  const sportsList = getFilteredCurrencies ();
  return (
    <form className="searchForm" onSubmit={handleSubmit}>
      <div className="searchForm__inputs">
        <Field
          name="city"
          type="text"
          className=""
          placeholder="Votre ville..."
          value={city}
          onChange={changeField}
        />
        <Field
          name="sport"
          type="text"
          className=""
          placeholder="Chercher un sport..."
          value={sport}
          onChange={changeField}
        />
      </div>
      <div className="searchForm__list" hidden >
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
  history: PropTypes.objectOf( PropTypes.shape({
    push: PropTypes.func,
    length: PropTypes.number.isRequired,
  }),).isRequired,
};

export default SearchForm;
