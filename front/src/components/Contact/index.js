// == Import : npm
import React from 'react';
import Banner from 'src/components/Banner';

// == Import : local
import './contact.scss';

// == Component
const Contact = () => {

  return (
    <div className="contact">
      <Banner />
      <h1 className="contact__title">Nous contacter</h1>
      <p className="contact__text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum tenetur totam repellendus. Aliquid numquam a eum accusamus iure, culpa incidunt!</p>
      <form className="contact__form">
        <div className="contact__form__block__first">
          <select
            title="Civilité"
            className="contact__form__block__first__civility"
            //value=""
            //onChange=""
          >
            <option defaultValue="" hidden>Civilité</option>
            <option value="mister">M.</option>
            <option value="miss">Mme</option>
          </select>
          <input              
            type="text"
            className="contact__form__block__first__lastname"
            placeholder="Nom"
            // value=""
            // onChange=""
          />
          <input
            type="text"
            className="contact__form__block__first__firstname"
            placeholder="Prénom"
            // value=""
            // onChange=""
          />
        </div>
        <div className="contact__form__block__second">          
          <input
            type="text"
            className="contact__form__block__second__email"
            placeholder="Email"
            // value=""
            // onChange=""
          />
          <input
            type="text"
            className="contact__form__block__second__subject"
            placeholder="Sujet"
            // value=""
            // onChange=""
          />
        </div>
        <div className="contact__form__block__third">
            <textarea
              className="contact__form__block__third__content"
              placeholder="Veuillez saisir votre message"
              cols="30"
              rows="3"
              maxLength="255"
            >
            </textarea>
          <button className="contact__form__block__third__button" type="submit">
            Envoyer
          </button>
        </div>        
      </form>
    </div>
  )
}

export default Contact;
