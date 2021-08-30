import React from 'react';
import { FaStar } from 'react-icons/fa';
import PropTypes from 'prop-types';

import './starRating.scss';

const StarRating = ({
  onClickStar,
  rating,
}) => {
  const handleOnClick = (event) => {
    // console.log('click')
    onClickStar(event.target.value);
  };

  return (
    <div className="rating">
      {[...Array(5)].map((_star, i) => {
        const ratingValue = i + 1;

        return (
          // eslint-disable-next-line jsx-a11y/label-has-associated-control
          <label>
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={handleOnClick}

            />
            <FaStar
              className="star"
              color={ratingValue <= rating ? '#ffc107' : '#e4e5e9'}
              size={40}
            />
          </label>
        );
      })}
    </div>
  );
};

StarRating.propTypes = {
  onClickStar: PropTypes.func.isRequired,
  rating: PropTypes.number.isRequired,
};

export default StarRating;
