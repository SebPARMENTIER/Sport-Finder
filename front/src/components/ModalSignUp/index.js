import React from 'react';
import { IoIosCloseCircleOutline } from "react-icons/io";
// import PropTypes from 'prop-types';

import './modalSignUp.scss';

export default function ModalSignUp() {
  return (
    <container className='modalSignUp'>
      <div className='modalSignUp__container'>
        <IoIosCloseCircleOutline className="modalSignUp__container__close"/>
        <h1 className='modalSignUp__container__title'>Inscription</h1>
        <form className='modalSignUp__container__form'>
          <div className="modalSignUp__container__form__first">
            <input
              className="modalSignUp__container__form__first__input"
              type="text"
              placeholder="Email..."
            />
            <input
              className="modalSignUp__container__form__first__input"
              type="text"
              placeholder="Pseudo..."
            />
          </div>
          <div className="modalSignUp__container__form__second">
            <input
              className="modalSignUp__container__form__second__input"
              type="text"
              placeholder="Mot de passe..."
            />
            <input
              className="modalSignUp__container__form__second__input"
              type="text"
              placeholder="Vérification mot de passe..."
            />
          </div>
          <button
            type="submit"
            className="modalSignUp__container__form__button"
          >
            Valider
          </button>
        </form>
        
      </div>
    </container>
  );
}

// ModalSignUp.propTypes = {

// };
