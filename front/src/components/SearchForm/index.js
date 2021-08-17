import React from 'react';
// import PropTypes from 'prop-types';

import './styles.scss';

export default function SearchForm() {
  return (
    <form className='SearchForm'>
      <input
        type="text"
        className="SearchForm__input"
        placeholder="Votre adresse..."
      />
      <input
        type="text"
        className="SearchForm__input"
        placeholder="Chercher un sport..."
      />
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
