/* eslint-disable import/no-unresolved */
// == Import : npm
import React from 'react';
import { IoIosCloseCircleOutline } from 'react-icons/io';
import PropTypes from 'prop-types';

// == Import : local
import FieldTextarea from 'src/components/FieldTextarea';
import StarRating from 'src/containers/StarRating';
import './modalAddReview.scss';

// == Component and Export
export default function
ModalAddReview({
  reviewContent,
  changeField,
  handleReview,
  onClickCloseAddReview,
  isCreateReviewError,
}) {
  const handleSubmit = (event) => {
    event.preventDefault();
    handleReview();
  };
  const handleOnClickCloseAddReview = () => {
    onClickCloseAddReview();
  };
  return (
    <div className="modalAddReview">
      <div className="modalAddReview__container">
        <button
          type="submit"
          className="modalAddReview__container__close"
          onClick={handleOnClickCloseAddReview}
        >
          <IoIosCloseCircleOutline className="modalAddReview__container__close__circle" />
        </button>
        <h1 className="modalAddReview__container__title">Ajouter un avis</h1>
        <form className="modalAddReview__container__form" onSubmit={handleSubmit}>
          <div className="modalAddReview__container__form__edit__input">
            <FieldTextarea
              name="reviewContent"
              className="modalAddReview__container__form__edit__input__text"
              placeholder="Veuillez saisir votre message"
              value={reviewContent}
              onChange={changeField}
            />
          </div>
          <div className="modalAddReview__container__form__edit">
            <p className="modalAddReview__container__form__edit__text">Donnez votre note</p>
            <div className="modalAddReview__container__form__edit__rating">
              <StarRating />
            </div>
          </div>
          {isCreateReviewError && (
            <p className="modalAddReview__container__form__error">Une erreur s'est produite, veuillez réessayer.</p>
          )}
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
  isCreateReviewError: PropTypes.bool.isRequired,
};

ModalAddReview.defaultProps = {
  reviewContent: '',
};
