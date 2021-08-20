import React from 'react';
import { IoIosCloseCircleOutline } from "react-icons/io";
import PropTypes from 'prop-types';

import Field from 'src/components/Field';
import './modalSignUp.scss';

const ModalSignUp = ({
  pseudo,
  email,
  password,
  passwordConfirm,
  changeField,
  handleCreateUser,
  isCreateUserError,
  onClickCloseSignUp
}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleCreateUser();
  };
  const handleOnClickCloseSignUp = () => {
    console.log('click');
    onClickCloseSignUp();
  }
  return (
    <div className='modalSignUp'>
      <div className='modalSignUp__container'>
        <button
          type="submit"
          className="modalSignUp__container__close"
          onClick={handleOnClickCloseSignUp}
        >
          <IoIosCloseCircleOutline className="modalSignUp__container__close__circle"/>
        </button>
        
        <h1 className='modalSignUp__container__title'>Inscription</h1>
        <form className='modalSignUp__container__form' onSubmit={handleSubmit}>
          <div className="modalSignUp__container__form__first">
            <Field
              name="email"
              type="text"
              placeholder="Email..."
              onChange={changeField}
              value={email}
            />
            <Field
              name="pseudo"
              type="text"
              placeholder="Pseudo..."
              onChange={changeField}
              value={pseudo}
            />
          </div>
          <div className="modalSignUp__container__form__second">
            <Field
              name="password"
              type="password"
              placeholder="Mot de passe..."
              onChange={changeField}
              value={password}
            />
            <Field
              name="passwordConfirm"
              type="password"
              placeholder="Vérification mot de passe..."
              onChange={changeField}
              value={passwordConfirm}
            />
          </div>
          {isCreateUserError && <p className="modalSignUp__form__error">Vérifiez votre saisie</p>}
          <button
            type="submit"
            className="modalSignUp__container__form__button"
          >
            Valider
          </button>
        </form>
        
      </div>
    </div>
  );
}

ModalSignUp.propTypes = {
  pseudo: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,  
  passwordConfirm: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  handleCreateUser: PropTypes.func.isRequired,
  isCreateUserError: PropTypes.bool.isRequired,
  onClickCloseSignUp: PropTypes.func.isRequired,
};

export default ModalSignUp;
