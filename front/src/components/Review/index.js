// == Import : npm
import React from 'react';
// import PropTypes from 'prop-types';

// == Import : local
import './review.scss';

const Review = ({
  review,
}) => {
  return (
    <div className="review">
      <div className="review__block1">
        <div className="review__block1__header">
          <div className="review__block1__header__subject">Super Club de Boxe !!! </div>
          <div className="review__block1__header__date">{review.createdAt}</div>
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
          <div className="review__block2__change__update">✏️</div>
          <div className="review__block2__change__delete">🗑️</div>
        </div>
      </div>
      <div className="review__content">{review.content}</div>
    </div>
  );
};

// Review.propTypes = {

// }

export default Review;