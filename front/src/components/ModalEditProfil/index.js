import React from 'react';
import { IoIosCloseCircleOutline } from "react-icons/io";
import Field from 'src/components/Field';

import PropTypes from 'prop-types';

import './modalEditProfil.scss';

const ModalEditProfil = ({
  onClickCloseEditProfil,
  password,
  newPseudo,
  changeField,
  handleUpdatePseudo,
  isUpdatePseudoSuccess,
  isUpdatePseudoError,
}) => {
  const handleOnClickCloseEditProfil = () => {
    console.log('click');
    onClickCloseEditProfil();
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    handleUpdatePseudo();
  };
  return (
    <div className='modalEditProfil'>
      <div className='modalEditProfil__container'>
        <button
          type="submit"
          className="modalSignIn__container__close"
          onClick={handleOnClickCloseEditProfil}
        >
          <IoIosCloseCircleOutline className="modalSignIn__container__close__circle"/>
        </button>
        <h1 className='modalEditProfil__container__title'>Modifier votre profil</h1>
        <form 
          className='modalEditProfil__container__form'
          onSubmit={handleSubmit}
        >
          {!isUpdatePseudoSuccess && (
          <div className='modalEditProfil__container__form__edit'>
            <p className='modalEditProfil__container__form__edit__text'>Modifier votre pseudo</p>
            <Field
              name="newPseudo"
              className="modalEditProfil__container__form__edit__input"
              type="text"
              placeholder="Nouveau pseudo..."
              onChange={changeField}
              value={newPseudo}
            />
          </div>
          )}
          {!isUpdatePseudoSuccess && (
          <div className='modalEditProfil__container__form__edit'>
            <p className='modalEditProfil__container__form__edit__text'>Validation avec mot de passe</p>
            <Field
              name="password"
              className="modalEditProfil__container__form__edit__input"
              type="password"
              placeholder="Mot de passe..."
              onChange={changeField}
              value={password}
            />
          </div>
          )}
          {isUpdatePseudoSuccess && <p className="modalEditProfil__container__form__success">Pseudo modifié avec succès.</p>}
          {isUpdatePseudoError && (
            <p className="modalEditProfil__container__form__error">Pseudo déjà existant ou mot de passe erroné.</p>
          )}
          {isUpdatePseudoSuccess && (
            <button
              type="submit"
              className="modalEditProfil__container__form__button"
              onClick={handleOnClickCloseEditProfil}
            >
              Ok
            </button>
          )}
          {!isUpdatePseudoSuccess && (
          <button
            type="submit"
            className="modalEditProfil__container__form__button"
          >
            Valider
          </button>
          )}
        </form>
      </div>
      
    </div>
  );
}

ModalEditProfil.propTypes = {
  onClickCloseEditProfil: PropTypes.func.isRequired,
  password: PropTypes.string.isRequired,
  newPseudo: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  handleUpdatePseudo: PropTypes.func.isRequired,
  isUpdatePseudoSuccess: PropTypes.bool.isRequired,
  isUpdatePseudoError: PropTypes.bool.isRequired,
};

export default ModalEditProfil;
