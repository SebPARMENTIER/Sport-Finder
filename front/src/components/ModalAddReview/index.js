import React from 'react';
import { IoIosCloseCircleOutline } from "react-icons/io";
// import PropTypes from 'prop-types';

import './modalAddReview.scss';

export default function 
ModalAddReview() {
  return (
    <container className='modalAddReview'>
      <div className='modalAddReview__container'>
        <IoIosCloseCircleOutline className="modalAddReview__container__close"/>
        <h1 className='modalAddReview__container__title'>Ajouter un avis</h1>
        <form className='modalAddReview__container__form'>
          <div className='modalAddReview__container__form__edit'>
          <textarea
              className="modalAddReview__container__form__edit__input"
              placeholder="Veuillez saisir votre message"
              cols="30"
              rows="3"
              maxLength="255"
            >
            </textarea>
          </div>
          <div className='modalAddReview__container__form__edit'>
            <p className='modalAddReview__container__form__edit__text'>Donnez votre note</p>
              <div className="modalAddReview__container__form__edit__rating">
              <div className="modalAddReview__container__form__edit__rating__star">★</div>
              <div className="modalAddReview__container__form__edit__rating__star">★</div>
              <div className="modalAddReview__container__form__edit__rating__star">★</div>
              <div className="modalAddReview__container__form__edit__rating__star">★</div>
              <div className="modalAddReview__container__form__edit__rating__star">★</div>
            </div>
          </div>
          <button
            type="submit"
            className="modalAddReview__container__form__button"
          >
            Valider
          </button>
          
        </form>
      </div>
    </container>
  );
}

// ModalAddReview.propTypes = {

// };