import React from 'react';
// import PropTypes from 'prop-types';

import './modalSignIn.scss';

export default function ModalSignin() {
  return (
    <container className='modalSignIn'>
      <h1 className='modalSignIn__title'>Connexion</h1>
      <form className='modalSignIn__form'>
        <div className='modalSignIn__form__edit'>
          <p className='modalSignIn__form__edit__text'>Ancien mot de passe</p>
          <input
            className="modalSignIn__form__edit__input"
            type="text"
            placeholder="Mot de passe..."
          />
        </div>
        <div className='modalSignIn__form__edit'>
          <p className='modalSignIn__form__edit__text'>Ancien mot de passe</p>
          <input
            className="modalSignIn__form__edit__input"
            type="text"
            placeholder="Mot de passe..."
          />
        </div>
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
