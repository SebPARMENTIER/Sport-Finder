import React from 'react';
// import PropTypes from 'prop-types';

import './searchForm.scss';

export default function SearchForm() {
  return (
    <form className='searchForm'>
      <div className="searchForm__inputs">
        <input
          type="text"
          className="searchForm__inputs__field"
          placeholder="Votre ville..."
        />
        <input
          type="text"
          className="searchForm__inputs__field"
          placeholder="Chercher un sport..."
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

// SearchForm.propTypes = {

// };
