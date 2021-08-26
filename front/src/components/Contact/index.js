// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';
import Banner from 'src/components/Banner';
import ModalSignIn from 'src/containers/ModalSignIn';
import ModalSignUp from 'src/containers/ModalSignUp';

// == Import : local
import Field from 'src/components/Field';
import FieldTextarea from 'src/components/FieldTextarea';
import './contact.scss';

// == Component
const Contact = ({
  civility,
  lastname,
  firstname,
  email,
  subject,
  content,
  changeField,
  handleContact,
  openLogIn,
  openLogUp,
}) => {
  const handleSubmit = (event) => {
    event.preventDefault();  
    handleContact();
  };
  return (
    <div className="contact">
      <Banner />
      <h1 className="contact__title">Nous contacter</h1>
      <p className="contact__text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum tenetur totam repellendus. Aliquid numquam a eum accusamus iure, culpa incidunt!</p>
      <form className="contact__form" onSubmit={handleSubmit}>
        <div className="contact__form__block__first">
          <select
            name="civility"          
            className="contact__form__block__first__civility"
            value={civility}
            onChange={changeField}
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
        <div className="contact__form__block__third">
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
            
          <button className="contact__form__block__third__button" type="submit">
            Envoyer
          </button>
        </div>        
      </form>
      { openLogIn && <ModalSignIn />}
      { openLogUp && <ModalSignUp />}
    </div>
  )
}

Contact.propTypes = {
  //civility: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  firstname: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  subject: PropTypes.string.isRequired,
  //content: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  handleContact: PropTypes.func.isRequired,
  openLogIn: PropTypes.bool.isRequired,
  openLogUp: PropTypes.bool.isRequired,
}

export default Contact;
