import React from 'react';
// import PropTypes from 'prop-types';

import './SearchForm.scss';

export default function SearchForm() {
  return (
    <form className='SearchForm'>
      <div className="SearchForm__inputs">
        <input
          type="text"
          className="SearchForm__inputs__field"
          placeholder="Votre adresse..."
        />
        <input
          type="text"
          className="SearchForm__inputs__field"
          placeholder="Chercher un sport..."
        />
      </div>
      <button
        type="submit"
        className="SearchForm__button"
      >
        Rechercher
      </button>
    </form>
  );
}

// SearchForm.propTypes = {

// };
