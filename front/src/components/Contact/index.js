/* eslint-disable import/no-unresolved */
// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// == Import : local
import Banner from 'src/components/Banner';
import ModalSignIn from 'src/containers/ModalSignIn';
import ModalSignUp from 'src/containers/ModalSignUp';
import Field from 'src/components/Field';
import FieldTextarea from 'src/components/FieldTextarea';
import './contact.scss';

// == Component
const Contact = ({
  openLogIn,
  openLogUp,
  civility,
  lastname,
  firstname,
  email,
  subject,
  content,
  changeField,
  handleContact,
  handleSelectCivility,
  onClickSubmit,
  submitMessage,
  onClickMessageSuccess,
  onClickCloseSettings,
  onClickNewSearch,
}) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    handleContact();
  };
  const changeSelect = (event) => {
    handleSelectCivility(event.target.value);
  };
  const handleOnClick = () => {
    onClickSubmit();
  };
  const handleOnClickMessageSuccess = () => {
    onClickMessageSuccess();
    onClickCloseSettings();
    onClickNewSearch();
  };
  return (
    <div className="contact">
      <Banner />
      <h1 className="contact__title">Nous contacter</h1>
      <p className="contact__text">Pour toute demande d'informations (signaler un avis, mot de passe oublié, etc...), veuillez remplir le formulaire ci-dessous.</p>
      <p className="contact__text">Nous vous répondrons dans les meilleurs délais.</p>
      <form
        className="contact__form"
        onSubmit={handleSubmit}
      >
        {!submitMessage && (
          <div className="contact__form__block__first">
            <select
              name="civility"
              title="Civilité"
              className="contact__form__block__first__civility"
              value={civility}
              onChange={changeSelect}
            >
              <option defaultValue="" hidden>Civilité</option>
              <option value="mister">M.</option>
              <option value="miss">Mme</option>
            </select>
            <Field
              name="lastname"
              type="text"
              className="contact__form__block__first__lastname"
              placeholder="Nom"
              value={lastname}
              onChange={changeField}
            />
            <Field
              name="firstname"
              type="text"
              className="contact__form__block__first__firstname"
              placeholder="Prénom"
              value={firstname}
              onChange={changeField}
            />
          </div>
        )}
        { !submitMessage && (
          <div className="contact__form__block__second">
            <Field
              name="email"
              type="text"
              className="contact__form__block__second__email"
              placeholder="Email"
              value={email}
              onChange={changeField}
            />
            <Field
              name="subject"
              type="text"
              className="contact__form__block__second__subject"
              placeholder="Sujet"
              onChange={changeField}
              value={subject}
            />
          </div>
        )}
        <div className="contact__form__block__third">
          {!submitMessage && (
            <FieldTextarea
              name="content"
              className="contact__form__block__third__content"
              placeholder="Veuillez saisir votre message"
              cols="30"
              rows="3"
              maxLength="255"
              value={content}
              onChange={changeField}
            />
          )}
          { submitMessage && (
            <p className="contact__form__success">Message bien envoyé</p>
          )}
          { !submitMessage && (
            <button
              className="contact__form__block__third__button"
              type="submit"
              onClick={handleOnClick}
            >
              Envoyer
            </button>
          )}
          { submitMessage && (
            <Link
              to="/"
              className="contact__form__block__third__button"
              onClick={handleOnClickMessageSuccess}
            >
              Ok
            </Link>
          )}
        </div>
      </form>
      { openLogIn && <ModalSignIn />}
      { openLogUp && <ModalSignUp />}

    </div>
  );
};

Contact.propTypes = {
  lastname: PropTypes.string.isRequired,
  firstname: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  subject: PropTypes.string.isRequired,
  civility: PropTypes.string,
  content: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  handleContact: PropTypes.func.isRequired,
  openLogIn: PropTypes.bool.isRequired,
  openLogUp: PropTypes.bool.isRequired,
  handleSelectCivility: PropTypes.func.isRequired,
  onClickSubmit: PropTypes.func.isRequired,
  submitMessage: PropTypes.bool.isRequired,
  onClickMessageSuccess: PropTypes.func.isRequired,
  onClickCloseSettings: PropTypes.func.isRequired,
  onClickNewSearch: PropTypes.func.isRequired,
};

Contact.defaultProps = {
  civility: '',
};

// == Export
export default Contact;
