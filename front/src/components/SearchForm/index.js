/* eslint-disable import/no-unresolved */
// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';

// == Import : local
import sportsData from 'src/assets/sportsData';
import departementsData from 'src/assets/departements-region';
import './searchForm.scss';

// == Component
const SearchForm = ({
  changeField,
  handleSearch,
  handleAverage,
  changeFieldCity,
  history,
  fullFieldSport,
  fullFieldCity,
  errorField,
  onClickError,
}) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    handleSearch();
    // Download average from DB to display it on result page
    handleAverage();
    history.push('/results');
  };
  const error = (event) => {
    event.preventDefault();
    onClickError();
  };
  // Check if both fields are not emply
  const submit = fullFieldSport && fullFieldCity ? handleSubmit : error;
  // Styles for react-select field
  const customStyle = {
    option: (provided) => ({
      ...provided,
      borderBottom: '1px dotted pink',
      padding: 20,
    }),
    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = 'opacity 300ms';
      return { ...provided, opacity, transition };
    },
  };
  return (
    <form className="searchForm" onSubmit={submit}>
      <div className="searchForm__inputs">
        <div className="searchForm__inputs__sport">
          <Select
            closeMenuOnSelect
            classNamePrefix="mySelectSport"
            styles={customStyle}
            options={sportsData}
            name="sport"
            type="text"
            onSearch={changeField}
            placeholder="Sport..."
            onChange={changeField}
            isSearchable
            isClearable
            backspaceRemovesValue
            required
            theme={(theme) => ({
              ...theme,
              borderRadius: '10px',
              paddingleft: '10px',
              colors: {
                ...theme.colors,
                primary25: 'rgba(71, 151, 161, 0.9)',
                primary: '#263548',
              },
            })}
          />
        </div>
        <div className="searchForm__inputs__city">
          <Select
            classNamePrefix="mySelectCity"
            styles={customStyle}
            options={departementsData}
            name="city"
            type="text"
            onSearch={changeFieldCity}
            placeholder="Département..."
            onChange={changeFieldCity}
            isSearchable
            required
            theme={(theme) => ({
              ...theme,
              borderRadius: '10px',
              paddingleft: '10px',
              colors: {
                ...theme.colors,
                primary25: 'rgba(71, 151, 161, 0.9)',
                primary: '#263548',
              },
            })}
          />
        </div>
      </div>
      {errorField && (
        <p className="searchForm__error">Veuillez bien selectionner un sport et un département.</p>
      )}
      <button
        type="submit"
        className="searchForm__button"
      >
        Rechercher
      </button>
    </form>
  );
};

SearchForm.propTypes = {
  changeField: PropTypes.func.isRequired,
  handleSearch: PropTypes.func.isRequired,
  handleAverage: PropTypes.func.isRequired,
  changeFieldCity: PropTypes.func.isRequired,
  fullFieldSport: PropTypes.bool.isRequired,
  fullFieldCity: PropTypes.bool.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  onClickError: PropTypes.func.isRequired,
  errorField: PropTypes.bool.isRequired,
};

// == Export
export default SearchForm;
