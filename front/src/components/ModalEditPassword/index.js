/* eslint-disable import/no-unresolved */
// == Import : npm
import React from 'react';
import { IoIosCloseCircleOutline } from 'react-icons/io';
import PropTypes from 'prop-types';

// == Import : local
import Field from 'src/components/Field';
import './modalEditPassword.scss';

// == Component
const ModalEditPassword = ({
  password,
  newPassword,
  newPasswordConfirm,
  changeField,
  onClickCloseEditPassword,
  handleUpdatePassword,
  updatePasswordError,
  isUpdatePasswordSuccess,
  isUpdatePasswordError,
  isUpdatePasswordLengthError,
}) => {
  const handleOnClickCloseEditPassword = () => {
    onClickCloseEditPassword();
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    handleUpdatePassword();
  };
  return (
    <div className="modalEditPassword">
      <div className="modalEditPassword__container">
        <button
          type="submit"
          className="modalSignIn__container__close"
          onClick={handleOnClickCloseEditPassword}
        >
          <IoIosCloseCircleOutline className="modalSignIn__container__close__circle" />
        </button>
        <h1 className="modalEditPassword__container__title">
          Modifier votre mot de passe
        </h1>
        <form
          className="modalEditPassword__container__form"
          onSubmit={handleSubmit}
        >
          {!isUpdatePasswordSuccess && (
            <div className="modalEditPassword__container__form__edit">
              <p className="modalEditPassword__container__form__edit__text">
                Mot de passe actuel
              </p>
              <Field
                name="password"
                type="password"
                className=""
                placeholder="Mot de passe..."
                onChange={changeField}
                value={password}
              />
            </div>
          )}
          {!isUpdatePasswordSuccess && (
            <div className="modalEditPassword__container__form__edit">
              <p className="modalEditPassword__container__form__edit__text">
                Nouveau mot de passe
              </p>
              <Field
                name="newPassword"
                type="password"
                className=""
                placeholder="Nouveau mot de passe..."
                onChange={changeField}
                value={newPassword}
              />
            </div>
          )}
          {!isUpdatePasswordSuccess && (
            <div className="modalEditPassword__container__form__edit">
              <p className="modalEditPassword__container__form__edit__text">
                Vérification mot de passe
              </p>
              <Field
                name="newPasswordConfirm"
                type="password"
                className=""
                placeholder="Vérification mot de passe..."
                onChange={changeField}
                value={newPasswordConfirm}
              />
            </div>
          )}
          {isUpdatePasswordSuccess && (
            <p className="modalSignUp__container__form__success">
              Mot de passe modifié avec succès.
            </p>
          )}
          {updatePasswordError && (
            <p className="modalEditPassword__container__form__error">
              Mot de passe non identique.
            </p>
          )}
          {isUpdatePasswordError && (
            <p className="modalEditPassword__container__form__error">
              Mot de passe actuel erroné.
            </p>
          )}
          {isUpdatePasswordLengthError && (
            <p className="modalEditPassword__container__form__error">
              Votre nouveau mot de passe doit contenir au minimum 8 caractères.
            </p>
          )}
          {isUpdatePasswordSuccess && (
            <button
              type="submit"
              className="modalSignUp__container__form__button"
              onClick={handleOnClickCloseEditPassword}
            >
              Ok
            </button>
          )}
          {!isUpdatePasswordSuccess && (
            <button
              type="submit"
              className="modalEditPassword__container__form__button"
            >
              Valider
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

ModalEditPassword.propTypes = {
  password: PropTypes.string.isRequired,
  newPassword: PropTypes.string.isRequired,
  newPasswordConfirm: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  onClickCloseEditPassword: PropTypes.func.isRequired,
  handleUpdatePassword: PropTypes.func.isRequired,
  updatePasswordError: PropTypes.bool.isRequired,
  isUpdatePasswordSuccess: PropTypes.bool.isRequired,
  isUpdatePasswordError: PropTypes.bool.isRequired,
  isUpdatePasswordLengthError: PropTypes.bool.isRequired,
};

// == Export
export default ModalEditPassword;
