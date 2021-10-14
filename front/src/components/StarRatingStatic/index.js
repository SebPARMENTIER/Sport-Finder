// == Import : npm
import React from 'react';
import { FaStar } from 'react-icons/fa';
import PropTypes from 'prop-types';

// == Import : local
import './startRatingStatic.scss';

// == Component
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
          color={ratingValue <= Number(rating) ? '#ffc107' : '#e4e5e9'}
          size={35}
        />
      );
    })}
  </div>
);

StarRatingStatic.propTypes = {
  rating: PropTypes.number.isRequired,
};

// == Export
export default StarRatingStatic;
