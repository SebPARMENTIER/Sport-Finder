import React from 'react';
// import PropTypes from 'prop-types';

import './modalEditPassword.scss';

export default function ModalEditPassword() {
  return (
    <container className='modalEditPassword'>
      <h1 className='modalEditPassword__title'>Modifier votre mot de passe</h1>
      <form className='modalEditPassword__form'>
        <div className='modalEditPassword__form__edit'>
          <p className='modalEditPassword__form__edit__text'>Ancien mot de passe</p>
          <input
            className="modalEditPassword__form__edit__input"
            type="text"
            placeholder="Mot de passe..."
          />
        </div>
        <div className='modalEditPassword__form__edit'>
          <p className='modalEditPassword__form__edit__text'>Nouveau mot de passe</p>
          <input
            className="modalEditPassword__form__edit__input"
            type="text"
            placeholder="Nouveau mot de passe..."
          />
        </div>
        <div className='modalEditPassword__form__edit'>
          <p className='modalEditPassword__form__edit__text'>Vérification mot de passe</p>
          <input
            className="modalEditPassword__form__edit__input"
            type="text"
            placeholder="Vérification mot de passe..."
          />
        </div>
        <button
          type="submit"
          className="modalEditPassword__form__button"
        >
          Valider
        </button>
        
      </form>
    </container>
  );
}

// ModalEditPassword.propTypes = {

// };
