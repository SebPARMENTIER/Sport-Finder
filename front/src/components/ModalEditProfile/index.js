import React from 'react';
import { IoIosCloseCircleOutline } from 'react-icons/io';
import Field from 'src/components/Field';

import PropTypes from 'prop-types';

import './modalEditProfile.scss';

const ModalEditProfile = ({
  onClickCloseEditProfile,
  password,
  newPseudo,
  changeField,
  onClickCloseEditProfil,
  handleUpdatePseudo,
  isUpdatePseudoSuccess,
  isUpdatePseudoError,
}) => {
  const handleOnClickCloseEditProfile = () => {
    // console.log('click');
    onClickCloseEditProfile();
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    handleUpdatePseudo();
  };
  return (
    <div className="modalEditProfile">
      <div className="modalEditProfile__container">
        <button
          type="submit"
          className="modalSignIn__container__close"
          onClick={handleOnClickCloseEditProfile}
        >
          <IoIosCloseCircleOutline className="modalSignIn__container__close__circle" />
        </button>
        <h1 className="modalEditProfile__container__title">
          Modifier votre profil
        </h1>
        <form
          className="modalEditProfile__container__form"
          onSubmit={handleSubmit}
        >
          {!isUpdatePseudoSuccess && (
            <div className="modalEditProfile__container__form__edit">
              <p className="modalEditProfile__container__form__edit__text">
                Modifier votre pseudo
              </p>
              <Field
                name="newPseudo"
                className="modalEditProfile__container__form__edit__input"
                type="text"
                placeholder="Nouveau pseudo..."
                onChange={changeField}
                value={newPseudo}
              />
            </div>
          )}
          {!isUpdatePseudoSuccess && (
            <div className="modalEditProfile__container__form__edit">
              <p className="modalEditProfile__container__form__edit__text">
                Validation avec mot de passe
              </p>
              <Field
                name="password"
                className="modalEditProfile__container__form__edit__input"
                type="password"
                placeholder="Mot de passe..."
                onChange={changeField}
                value={password}
              />
            </div>
          )}
          {isUpdatePseudoSuccess && (
            <p className="modalEditProfile__container__form__success">
              Pseudo modifié avec succès.
            </p>
          )}
          {isUpdatePseudoError && (
            <p className="modalEditProfile__container__form__error">
              Pseudo déjà existant ou mot de passe erroné.
            </p>
          )}
          {isUpdatePseudoSuccess && (
            <button
              type="submit"
              className="modalEditProfile__container__form__button"
              onClick={handleOnClickCloseEditProfile}
            >
              Ok
            </button>
          )}
          {!isUpdatePseudoSuccess && (
            <button
              type="submit"
              className="modalEditProfile__container__form__button"
            >
              Valider
            </button>
          )}
          
          
        </form>
      </div>
    </div>
  );
};

ModalEditProfile.propTypes = {
  onClickCloseEditProfile: PropTypes.func.isRequired,
  password: PropTypes.string.isRequired,
  newPseudo: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  handleUpdatePseudo: PropTypes.func.isRequired,
  isUpdatePseudoSuccess: PropTypes.bool.isRequired,
  isUpdatePseudoError: PropTypes.bool.isRequired,
};

export default ModalEditProfile;
