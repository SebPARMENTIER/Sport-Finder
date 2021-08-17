// == Import : npm
import React from 'react';

// == Import : local
import './contact.scss';

// == Component
const Contact = () => {

  return (
    <div className="contact">
      <h1 className="contact__title">Nous contacter</h1>
      <p className="contact__text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum tenetur totam repellendus. Aliquid numquam a eum accusamus iure, culpa incidunt!</p>
      <form className="contact__form">
        <label htmlFor="" className="contact__form__select__label">
          Civilité :
          <select className="contact__form__select__civility">
          <option value=""></option>
            <option value="mister">M.</option>
            <option value="miss">Mme</option>
          </select>
        </label>
        <label htmlFor="" className="contact__form__lastname__label">
          Nom de fammile :
          <input
            type="text"
            className="contact__form__lastname__input"
            placeholder="Nom de famille"
            value=""
            onChange=""
          />
        </label>
        <label htmlFor="" className="contact__form__firstname__label">
          Prénom :
          <input
            type="text"
            className="contact__form__firstname__input"
            placeholder="Prénom"
            value=""
            onChange=""
          />
        </label>
        <label htmlFor="" className="contact__form__email__label">
          Email :
          <input
            type="text"
            className="contact__form__email__input"
            placeholder="Email"
            value=""
            onChange=""
          />
        </label>
        <label htmlFor="" className="contact__form__subject__label">
          Sujet :
          <input
            type="text"
            className="contact__form__subject__input"
            placeholder="Sujet"
            value=""
            onChange=""
          />
        </label>      
        <label htmlFor="" className="contact__form__content">
          Veuillez saisir votre message :
          <textarea name="" id="" cols="30" rows="10" maxLength="255"></textarea>
        </label>
        <button className="contact__form__button" type="submit">
          Envoyer
        </button>
      </form>
    </div>
  )
}

export default Contact;
