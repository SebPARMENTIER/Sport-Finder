import React from 'react';
// import PropTypes from 'prop-types';

import './modalEditProfil.scss';

export default function 
ModalEditProfil() {
  return (
    <container className='modalEditProfil'>
      <div className='modalEditProfil__container'>
        <h1 className='modalEditProfil__container__title'>Modifier votre profil</h1>
        <form className='modalEditProfil__container__form'>
          <div className='modalEditProfil__container__form__edit'>
            <p className='modalEditProfil__container__form__edit__text'>Modifier votre email</p>
            <input
              className="modalEditProfil__container__form__edit__input"
              type="text"
              placeholder="Nouveau mail..."
            />
          </div>
          <div className='modalEditProfil__container__form__edit'>
            <p className='modalEditProfil__container__form__edit__text'>Modifier votre pseudo</p>
            <input
              className="modalEditProfil__container__form__edit__input"
              type="text"
              placeholder="Nouveau pseudo..."
            />
          </div>
          <div className='modalEditProfil__container__form__edit'>
            <p className='modalEditProfil__container__form__edit__text'>Validation avec mot de passe</p>
            <input
              className="modalEditProfil__container__form__edit__input"
              type="text"
              placeholder="Mot de passe..."
            />
          </div>
          <button
            type="submit"
            className="modalEditProfil__container__form__button"
          >
            Valider
          </button>
          
        </form>
      </div>
      
    </container>
  );
}

// ModalEditProfil.propTypes = {

// };
