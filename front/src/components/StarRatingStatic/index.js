import React from 'react';
import { FaStar } from 'react-icons/fa';
import PropTypes from 'prop-types';

import './startRatingStatic.scss';

const StarRatingStatic = ({
  rating,
}) => (
  <div className="ratingStatic">
    {[...Array(5)].map((_star, i) => {
      const ratingValue = i + 1;
      return (
        <FaStar
          key={ratingValue}
          className="starStatic"
          color={ratingValue <= rating ? '#ffc107' : '#e4e5e9'}
          size={35}
        />
      );
    })}
  </div>
);

StarRatingStatic.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default StarRatingStatic;
