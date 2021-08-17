// == Import : npm
import React from 'react';

// == Import : local
import './contact.scss';

// == Component
const Contact = () => {

  return (
    <div className="contact">
      <h1 className="contact_title">Nous contacter</h1>
      <p className="contact_text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum tenetur totam repellendus. Aliquid numquam a eum accusamus iure, culpa incidunt!</p>
      <form className="contact_form">
        <label htmlFor="" className="contact_form_select">
          Civilité :
          <select className="contact__form_select_civility">
            <option value="mister">M.</option>
            <option value="miss">Mme</option>
          </select>
        </label>
        <label htmlFor="" className="contact_form_lastname_label">
          Nom de fammile :
          <input
            type="text"
            className="contact_form_lastname_input"
            placeholder="Nom de famille"
            value=""
            onChange=""
          />
        </label>
        <label htmlFor="" className="contact_form_firstname_label">
          Prénom :
          <input
            type="text"
            className="contact_form_firstname_input"
            placeholder="Prénom"
            value=""
            onChange=""
          />
        </label>
        <label htmlFor="" className="contact_form_email_label">
          Email :
          <input
            type="text"
            className="contact_form_email_input"
            placeholder="Email"
            value=""
            onChange=""
          />
        </label>
        <label htmlFor="" className="contact_form_subject_label">
          Sujet :
          <input
            type="text"
            className="contact_form_subject_input"
            placeholder="Sujet"
            value=""
            onChange=""
          />
        </label>      
        <label htmlFor="" className="contact_form_content">
          Veuillez saisir votre message :
          <textarea name="" id="" cols="30" rows="10" maxLength="255"></textarea>
        </label>
        <button className="contact_form_button" type="submit">
          Envoyer
        </button>
      </form>
    </div>
  )
}

export default Contact;
