// == Import : npm
import React from 'react';
// import PropTypes from 'prop-types';

// == Import : local
import './review.scss';

const Review = () => {
  return (
    <div className="review">
      <div className="review__block1">
        <div className="review__block1__header">
          <div className="review__block1__header__subject">Super Club de Boxe !!! :)</div>
          <div className="review__block1__header__date">Sam 30/05/2021</div>
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
      <div className="review__content">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim delectus repudiandae vitae laudantium repellendus veniam ducimus perspiciatis vero officia deleniti, qui odit asperiores neque atque molestiae veritatis consectetur hic commodi, id error ab, aspernatur eaque? Optio.</div>
    </div>
  );
};

// Review.propTypes = {

// }

export default Review;
