import React from 'react';
// import PropTypes from 'prop-types';

import './modalSignIn.scss';

export default function ModalSignin() {
  return (
    <container className='modalSignIn'>
      <h1 className='modalSignIn__title'>Connexion</h1>
      <form className='modalSignIn__form'>
        <input
          className="modalSignIn__form__input"
          type="text"
          placeholder="Email..."
        />
        <input
          className="modalSignIn__form__input"
          type="text"
          placeholder="Mot de passe..."
        />
        <button
          type="submit"
          className="modalSignIn__form__button"
        >
          Valider
        </button>
      </form>
      <input className='modalSignIn__button' type="button" value="Inscription" />
    </container>
  );
}

// ModalSignin.propTypes = {

// };
