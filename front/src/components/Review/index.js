// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';
import { ImPencil2, ImBin } from 'react-icons/im'

// == Import : local
import './review.scss';

const Review = ({
  reviewResult,
  onClickModalUpdateReview,
  onClickModalDeleteReview,
}) => {
  const handleModalUpdateReview = () => {
    onClickModalUpdateReview();
  };
  const handleModalDeleteReview = () => {
    onClickModalDeleteReview();
  };
  return (
    <div className="review">
      <div className="review__block1">
        <div className="review__block1__header">
          <div className="review__block1__header__subject">Super Club de Boxe !!! :)</div>
          <div className="review__block1__header__date">{reviewResult.createdAt}</div>
        </div>
        <div className="review__block1__rating">
          <div className="review__block1__rating__star__full">★</div>
          <div className="review__block1__rating__star__full">★</div>
          <div className="review__block1__rating__star__full">★</div>
          <div className="review__block1__rating__star__full">★</div>
          <div className="review__block1__rating__star__empty">★</div>
        </div>
      </div>
      <div className="review__block2">
        <div className="review__block2__from">Avis de BeBoxe85</div>
        <div className="review__block2__change">
          <div className="review__block2__change__update">
            <ImPencil2 onClick={handleModalUpdateReview} />
          </div>
          <div className="review__block2__change__delete">
            <ImBin onClick={handleModalDeleteReview} />
          </div>
        </div>
      </div>
      <div className="review__content">{reviewResult.content}</div>
    </div>
  );
};

Review.propTypes = {
  reviewResult: PropTypes.shape({
    createdAt: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }),
  onClickModalUpdateReview: PropTypes.func.isRequired,
  onClickModalDeleteReview: PropTypes.func.isRequired,
};

export default Review;
