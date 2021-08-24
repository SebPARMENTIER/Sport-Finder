import React from 'react';
import { IoIosCloseCircleOutline } from "react-icons/io";
import Field from 'src/components/Field';

import PropTypes from 'prop-types';

import './modalEditPassword.scss';

const ModalEditPassword = ({
  onClickCloseEditPassword,
}) => {
  const handleOnClickCloseEditPassword = () => {
    console.log('click');
    onClickCloseEditPassword();
  }
  return (
    <div className="modalEditPassword">
      <div className='modalEditPassword__container'>
        <button
          type="submit"
          className="modalSignIn__container__close"
          onClick={handleOnClickCloseEditPassword}
        >
          <IoIosCloseCircleOutline className="modalSignIn__container__close__circle"/>
        </button>
        <h1 className='modalEditPassword__container__title'>Modifier votre mot de passe</h1>
        <form className='modalEditPassword__container__form'>
          <div className='modalEditPassword__container__form__edit'>
            <p className='modalEditPassword__container__form__edit__text'>Ancien mot de passe</p>
            <Field
              name="password"
              type="text"
              placeholder="Mot de passe..."
            />
          </div>
          <div className='modalEditPassword__container__form__edit'>
            <p className='modalEditPassword__container__form__edit__text'>Nouveau mot de passe</p>
            <Field
              name="newPassword"
              type="text"
              placeholder="Nouveau mot de passe..."
            />
          </div>
          <div className='modalEditPassword__container__form__edit'>
            <p className='modalEditPassword__container__form__edit__text'>Vérification mot de passe</p>
            <Field
              name="passwordVerification"
              type="text"
              placeholder="Vérification mot de passe..."
            />
          </div>
          <button
            type="submit"
            className="modalEditPassword__container__form__button"
          >
            Valider
          </button>
        </form>
      </div>
      
    </div>
  );
}

ModalEditPassword.propTypes = {
  onClickCloseEditPassword: PropTypes.func.isRequired,
};

export default ModalEditPassword