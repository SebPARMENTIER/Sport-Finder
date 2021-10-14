// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';
import { IoIosCloseCircleOutline } from 'react-icons/io';

// == Import : local
import './modalDeleteReview.scss';

// == Component and Export
export default function ModalDeleteReview({
  onClickCloseDeleteReview,
  onClickValidDeleteReview,
  isDeleteReviewError,
}) {
  const handleOnClickCloseDeleteReview = () => {
    onClickCloseDeleteReview();
  };
  const handleValidDeleteReview = () => {
    onClickValidDeleteReview();
  };
  return (
    <div className="modalDeleteReview">
      <div className="modalDeleteReview__container">
        <button
          type="submit"
          className="modalDeleteReview__container__close"
          onClick={handleOnClickCloseDeleteReview}
        >
          <IoIosCloseCircleOutline className="modalDeleteReview__container__close__circle" />
        </button>
        <h1 className="modalDeleteReview__container__title">Supprimer votre avis</h1>
        <div className="modalDeleteReview__container__edit">
          <p className="modalDeleteReview__container__edit__text">Voulez-vous supprimer votre avis ?</p>
        </div>
        {isDeleteReviewError && (
          <p className="modalDeleteReview__container__error">Une erreur s'est produite, veuillez réessayer.</p>
        )}
        <div>
          <button
            type="submit"
            onClick={handleValidDeleteReview}
            className="modalDeleteReview__container__button"
          >
            Oui
          </button>
          <button
            type="submit"
            onClick={handleOnClickCloseDeleteReview}
            className="modalDeleteReview__container__button"
          >
            Non
          </button>
        </div>
      </div>
    </div>
  );
}

ModalDeleteReview.propTypes = {
  onClickCloseDeleteReview: PropTypes.func.isRequired,
  onClickValidDeleteReview: PropTypes.func.isRequired,
  isDeleteReviewError: PropTypes.bool.isRequired,
};
