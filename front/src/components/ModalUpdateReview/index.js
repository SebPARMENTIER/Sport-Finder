import React from 'react';
import { IoIosCloseCircleOutline } from 'react-icons/io';
import StarRating from 'src/containers/StarRating';

import PropTypes from 'prop-types';
import FieldTextarea from 'src/components/FieldTextarea';

import "./modalUpdateReview.scss";

export default function ModalUpdateReview({
  newReviewContent,
  changeField,
  handleUpdateReview,
  onClickCloseUpdateReview,
  isUpdateReviewError,
}) {
  const handleSubmit = (event) => {
    event.preventDefault();
    handleUpdateReview();
  };
  const handleOnClickCloseAddReview = () => {
    // console.log('click');
    onClickCloseUpdateReview();
  };
  return (
    <div className="modalUpdateReview">
      <div className="modalUpdateReview__container">
        <button
          type="submit"
          className="modalUpdateReview__container__close"
          onClick={handleOnClickCloseAddReview}
        >
          <IoIosCloseCircleOutline className="modalUpdateReview__container__close__circle" />
        </button>
        <h1 className="modalUpdateReview__container__title">
          Modifier votre avis
        </h1>
        <form
          className="modalUpdateReview__container__form"
          onSubmit={handleSubmit}
        >
          <div className="modalUpdateReview__container__form__edit">
            <FieldTextarea
              name="newReviewContent"
              className="modalUpdateReview__container__form__edit__input"
              placeholder="Veuillez saisir votre message"
              value={newReviewContent}
              onChange={changeField}
            />
          </div>
          <div className="modalUpdateReview__container__form__edit">
            <p className="modalUpdateReview__container__form__edit__text">
              Donnez votre note
            </p>
            <div className="modalUpdateReview__container__form__edit__rating">
              <StarRating />
            </div>
          </div>
          {isUpdateReviewError && (
            <p className="modalUpdateReview__container__form__error">
              Une erreur s'est produite, veuillez réessayer.
            </p>
          )}
          <button
            type="submit"
            className="modalUpdateReview__container__form__button"
          >
            Valider
          </button>
        </form>
      </div>
    </div>
  );
}

ModalUpdateReview.propTypes = {
  newReviewContent: PropTypes.string,
  changeField: PropTypes.func.isRequired,
  handleUpdateReview: PropTypes.func.isRequired,
  onClickCloseUpdateReview: PropTypes.func.isRequired,
  isUpdateReviewError: PropTypes.bool.isRequired,
};

ModalUpdateReview.defaultProps = {
  newReviewContent: '',
};
