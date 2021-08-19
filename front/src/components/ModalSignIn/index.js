import React from 'react';
import { IoIosCloseCircleOutline } from "react-icons/io";
// import PropTypes from 'prop-types';

import './modalSignIn.scss';

export default function ModalSignin() {
  return (
    <container className='modalSignIn'>
      <div className='modalSignIn__container'>
        <IoIosCloseCircleOutline className="modalSignIn__container__close"/>
        <h1 className='modalSignIn__container__title'>Connexion</h1>
        <form className='modalSignIn__container__form'>
          <input
            className="modalSignIn__container__form__input"
            type="text"
            placeholder="Email..."
          />
          <input
            className="modalSignIn__container__form__input"
            type="text"
            placeholder="Mot de passe..."
          />
          <button
            type="submit"
            className="modalSignIn__container__form__button"
          >
            Valider
          </button>
        </form>
        <input className='modalSignIn__container__button' type="button" value="Inscription" />
      </div>
      
    </container>
  );
}

// ModalSignin.propTypes = {

// };
