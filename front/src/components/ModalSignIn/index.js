import React from 'react';
import { IoIosCloseCircleOutline } from 'react-icons/io';
import PropTypes from 'prop-types';

import Field from 'src/components/Field';
import './modalSignIn.scss';

const ModalSignin = ({
  email,
  password,
  changeField,
  handleLogin,
  isError,
  onClickLogUp,
  onClickCloseSignIn,
}) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    handleLogin();
  };
  const handleOnClickLogUp = () => {
    // console.log('click');
    onClickLogUp();
  };
  const handleOnClickCloseSignIn = () => {
    // console.log('click');
    onClickCloseSignIn();
  };
  return (
    <div className="modalSignIn">
      <div className="modalSignIn__container">
        <button
          type="submit"
          className="modalSignIn__container__close"
          onClick={handleOnClickCloseSignIn}
        >
          <IoIosCloseCircleOutline className="modalSignIn__container__close__circle" />
        </button>
        <h1 className="modalSignIn__container__title">Connexion</h1>
        <form className="modalSignIn__container__form" onSubmit={handleSubmit}>
          <div className="modalSignIn__container__form__input">
            <Field
              name="email"
              className="modalSignIn__container__form__input__field"
              type="email"
              placeholder="Email..."
              onChange={changeField}
              value={email}
            />
            <Field
              name="password"
              className="modalSignIn__container__form__input__field"
              type="password"
              placeholder="Mot de passe..."
              onChange={changeField}
              value={password}
            />
          </div>

          {isError && (
            <p className="modalSignIn__container__form__error">
              Vérifiez vos identifiants de connexion
            </p>
          )}
          <button
            type="submit"
            className="modalSignIn__container__form__button"
          >
            Valider
          </button>
        </form>
        <button
          type="submit"
          className="modalSignIn__container__button"
          onClick={handleOnClickLogUp}
        >
          Inscription
        </button>
      </div>
    </div>
  );
};

ModalSignin.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  handleLogin: PropTypes.func.isRequired,
  isError: PropTypes.bool.isRequired,
  onClickLogUp: PropTypes.func.isRequired,
  onClickCloseSignIn: PropTypes.func.isRequired,
};

export default ModalSignin;