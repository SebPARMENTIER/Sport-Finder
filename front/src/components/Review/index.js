/* eslint-disable import/no-unresolved */
/* eslint-disable camelcase */
// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';
import { ImPencil2, ImBin } from 'react-icons/im';
import Moment from 'react-moment';
import 'moment-timezone';

// == Import : local
import StarRatingStatic from 'src/components/StarRatingStatic';
import './review.scss';

// Set the locale for every react-moment instance to French.
Moment.globalLocale = 'fr';

// == Component
const Review = ({
  id,
  updatedAt,
  author,
  content,
  star,
  onClickModalUpdateReview,
  onClickModalDeleteReview,
  getIdValue,
  idUser,
  userId,
}) => {
  const handleModalUpdateReview = () => {
    getIdValue(id);
    onClickModalUpdateReview(content, star);
  };
  const handleModalDeleteReview = () => {
    getIdValue(id);
    onClickModalDeleteReview();
  };
  let reviewOwner = false;
  // Check if connected user is the owner of reviews to make appear icon pencil and bin
  if (idUser === userId) {
    reviewOwner = true;
  }
  return (
    <div className="review">
      <div className="review__block1">
        <div className="review__block1__header">
          <div className="review__block1__header__from">Avis de <span>{author.pseudo}</span></div>
          <div className="review__block1__header__date">
            <Moment fromNow>{updatedAt}</Moment>
          </div>
        </div>
        <div className="review__block1__rating">
          <StarRatingStatic
            rating={star}
          />
        </div>
      </div>
      <div className="review__block2">
        <div className="review__block2__content">{content}</div>
        {reviewOwner && (
          <div className="review__block2__change">
            <div className="review__block2__change__update">
              <ImPencil2 onClick={handleModalUpdateReview} />
            </div>
            <div className="review__block2__change__delete">
              <ImBin onClick={handleModalDeleteReview} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

Review.propTypes = {
  id: PropTypes.number.isRequired,
  author: PropTypes.object.isRequired,
  updatedAt: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  star: PropTypes.number.isRequired,
  onClickModalUpdateReview: PropTypes.func.isRequired,
  onClickModalDeleteReview: PropTypes.func.isRequired,
  getIdValue: PropTypes.func.isRequired,
  idUser: PropTypes.number.isRequired,
  userId: PropTypes.number.isRequired,
};

// == Export
export default Review;
