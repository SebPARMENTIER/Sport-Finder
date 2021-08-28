import React from 'react';
import { IoIosCloseCircleOutline } from "react-icons/io";

import PropTypes from 'prop-types';
import FieldTextarea from 'src/components/FieldTextarea';

import './modalAddReview.scss';

export default function 
ModalAddReview({
  reviewContent,
  changeField,
  handleReview,
  onClickCloseAddReview,
}) {
  const handleSubmit = (event) => {
    event.preventDefault();
    handleReview();
  };
  const handleOnClickCloseAddReview = () => {
    console.log('click');
    onClickCloseAddReview();
  };
  return (
    <div className='modalAddReview'>
      <div className='modalAddReview__container'>
        <button
          className="modalAddReview__container__close"
          onClick={handleOnClickCloseAddReview}
        >
          <IoIosCloseCircleOutline className="modalAddReview__container__close"/>
        </button>
        <h1 className='modalAddReview__container__title'>Ajouter un avis</h1>
        <form className='modalAddReview__container__form' onSubmit={handleSubmit}>
          <div className='modalAddReview__container__form__edit'>
            <FieldTextarea
              name="reviewContent"
              className="modalAddReview__container__form__edit__input"
              placeholder="Veuillez saisir votre message"
              value={reviewContent}
              onChange={changeField}
            />
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
    </div>
  );
}

ModalAddReview.propTypes = {
  reviewContent: PropTypes.string,
  changeField: PropTypes.func.isRequired,
  handleReview: PropTypes.func.isRequired,
  onClickCloseAddReview: PropTypes.func.isRequired,
};
