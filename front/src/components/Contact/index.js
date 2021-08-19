// == Import : npm
import React from 'react';
<<<<<<< HEAD

// == Import : local
import Banner from 'src/components/Banner';
=======
import Banner from 'src/components/Banner';

// == Import : local
>>>>>>> bd55bd1cf012b6eb5ec069beec06542f29e01ba5
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
<<<<<<< HEAD
=======
            title="Civilité"
>>>>>>> bd55bd1cf012b6eb5ec069beec06542f29e01ba5
            className="contact__form__block__first__civility"
            //value=""
            //onChange=""
          >
<<<<<<< HEAD
            <option select defaultValue="" hidden>Civilité</option>
=======
            <option defaultValue="" hidden>Civilité</option>
>>>>>>> bd55bd1cf012b6eb5ec069beec06542f29e01ba5
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
<<<<<<< HEAD
              rows="10"
=======
              rows="3"
>>>>>>> bd55bd1cf012b6eb5ec069beec06542f29e01ba5
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

<<<<<<< HEAD
export default Contact;
=======
export default Contact;
>>>>>>> bd55bd1cf012b6eb5ec069beec06542f29e01ba5
