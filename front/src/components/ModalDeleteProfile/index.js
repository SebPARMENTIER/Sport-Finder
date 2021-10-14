/* eslint-disable import/no-unresolved */
// == Import : npm
import React from 'react';
import { Link } from 'react-router-dom';
import { IoIosCloseCircleOutline } from 'react-icons/io';
import PropTypes from 'prop-types';

// == Import : local
import Field from 'src/components/Field';
import './modalDeleteProfile.scss';

// == Component
const ModalDeleteProfile = ({
  password,
  changeField,
  handleDeleteProfile,
  onClickCloseDeleteProfile,
  onClickCloseDeleteProfileSimple,
  isDeleteProfileSuccess,
  isDeleteProfileError,
}) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    handleDeleteProfile();
  };
  // Close modal and redirect to home
  const handleOnClickCloseDeleteProfile = () => {
    onClickCloseDeleteProfile();
  };
  // Close modal only
  const handleOnClickCloseDeleteProfileSimple = () => {
    onClickCloseDeleteProfileSimple();
  };
  return (
    <div className="modalDeleteProfile">
      <div className="modalDeleteProfile__container">
        {!isDeleteProfileSuccess && (
          <button
            type="submit"
            className="modalDeleteProfile__container__close"
            onClick={handleOnClickCloseDeleteProfileSimple}
          >
            <IoIosCloseCircleOutline className="modalDeleteProfile__container__close__circle" />
          </button>
        )}
        <h1 className="modalDeleteProfile__container__title">Suppression du compte</h1>
        {!isDeleteProfileSuccess && (
          <p className="modalDeleteProfile__container__text">
            Veuillez saisir votre mot de passe pour supprimer votre compte.
          </p>
        )}
        <form
          className="modalDeleteProfile__container__form"
          onSubmit={handleSubmit}
        >
          {!isDeleteProfileSuccess && (
            <Field
              name="password"
              className="modalDeleteProfile__container__form__field"
              type="password"
              placeholder="Mot de passe..."
              onChange={changeField}
              value={password}
            />
          )}
          {isDeleteProfileSuccess && <p className="modalDeleteProfile__container__form__success">Votre compte a été supprimé avec succès !!!</p>}
          {isDeleteProfileError && <p className="modalDeleteProfile__container__form__error">Impossible de supprimer votre compte, vérifier votre saisie.</p>}
          {!isDeleteProfileSuccess && (
            <button
              type="submit"
              className="modalDeleteProfile__container__form__button"
            >
              Valider
            </button>
          )}
        </form>
        {!isDeleteProfileSuccess && (
          <button
            type="submit"
            className="modalDeleteProfile__container__button"
            onClick={handleOnClickCloseDeleteProfileSimple}
          >
            Annuler
          </button>
        )}
        {isDeleteProfileSuccess && (
          <button
            type="submit"
            className="modalDeleteProfile__container__button"
            onClick={handleOnClickCloseDeleteProfile}
          >
            <Link
              to="/"
            >
              ok
            </Link>
          </button>
        )}
      </div>
    </div>
  );
};

ModalDeleteProfile.propTypes = {
  password: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  handleDeleteProfile: PropTypes.func.isRequired,
  onClickCloseDeleteProfile: PropTypes.func.isRequired,
  onClickCloseDeleteProfileSimple: PropTypes.func.isRequired,
  isDeleteProfileSuccess: PropTypes.bool.isRequired,
  isDeleteProfileError: PropTypes.bool.isRequired,
};

// == Export
export default ModalDeleteProfile;
