import React from 'react';
import { IoIosCloseCircleOutline } from "react-icons/io";
import Field from 'src/components/Field';

import PropTypes from 'prop-types';

import './modalEditPassword.scss';

const ModalEditPassword = ({
  onClickCloseEditPassword,
  changeField,
  password,
  newPassword,
  newPasswordConfirm,
  handleUpdatePassword,
  updatePasswordError,
}) => {
  const handleOnClickCloseEditPassword = () => {
    console.log('click');
    onClickCloseEditPassword();
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    handleUpdatePassword();
  };
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
        <form 
          className='modalEditPassword__container__form'
          onSubmit={handleSubmit}
        >
          <div className='modalEditPassword__container__form__edit'>
            <p className='modalEditPassword__container__form__edit__text'>Mot de passe actuel</p>
            <Field
              name="password"
              type="password"
              placeholder="Mot de passe..."
              onChange={changeField}
              value={password}
            />
          </div>
          <div className='modalEditPassword__container__form__edit'>
            <p className='modalEditPassword__container__form__edit__text'>Nouveau mot de passe</p>
            <Field
              name="newPassword"
              type="password"
              placeholder="Nouveau mot de passe..."
              onChange={changeField}
              value={newPassword}
            />
          </div>
          <div className='modalEditPassword__container__form__edit'>
            <p className='modalEditPassword__container__form__edit__text'>Vérification mot de passe</p>
            <Field
              name="newPasswordConfirm"
              type="password"
              placeholder="Vérification mot de passe..."
              onChange={changeField}
              value={newPasswordConfirm}
            />
          </div>
          {updatePasswordError && <p className="modalEditPassword__container__form__error">Mot de passe non identique.</p>}
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
  changeField: PropTypes.func.isRequired,
  password: PropTypes.string.isRequired,
  newPassword: PropTypes.string.isRequired,
  newPasswordConfirm: PropTypes.string.isRequired,
  handleUpdatePassword: PropTypes.func.isRequired,
  updatePasswordError: PropTypes.bool.isRequired,
};

export default ModalEditPassword