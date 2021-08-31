// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';
import { ImPencil2, ImBin } from 'react-icons/im';
import { FaStar } from 'react-icons/fa';
import Moment from 'react-moment';
import 'moment-timezone';

// Set the locale for every react-moment instance to French.
Moment.globalLocale = 'fr';

// == Import : local
import './review.scss';

const Review = ({
  id,
  createdAt,
  author,
  content,
  star,
  onClickModalUpdateReview,
  onClickModalDeleteReview,
  getIdValue,
  user_id,
  userId,
}) => {
  const handleModalUpdateReview = () => {
    getIdValue(id);
    onClickModalUpdateReview();
  };
  const handleModalDeleteReview = () => {
    getIdValue(id);
    onClickModalDeleteReview();
  };
  let reviewOwner = '';
  if (user_id === userId) {
    reviewOwner = true;
  }
  console.log('reviewOwner:', reviewOwner);
  return (
    <div className="review">
      <div className="review__block1">
        <div className="review__block1__header">
          <div className="review__block1__header__from">Avis de {author.pseudo}</div>
          <div className="review__block1__header__date">
            <Moment fromNow>{createdAt}</Moment>
          </div>
        </div>
        <div className="review__block1__rating">
          {/* {getStarsForOneReview()} */}
          <div className="review__block1__rating__star__full">★</div>
          <div className="review__block1__rating__star__full">★</div>
          <div className="review__block1__rating__star__full">★</div>
          <div className="review__block1__rating__star__full">★</div>
          <div className="review__block1__rating__star__empty">★</div>
        </div>
      </div>
      <div className="review__block2">
        {reviewOwner && (
          <div className="review__block2__change">
            <div className="review__block2__change__update">
              <button
                type="submit"
                onClick={handleModalUpdateReview}
              >
                <ImPencil2 />
              </button>
            </div>
            <div className="review__block2__change__delete">
              <ImBin onClick={handleModalDeleteReview} />
            </div>
          </div>
        )}
      </div>
      <div className="review__content">{content}</div>
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
  userId: PropTypes.number.isRequired,
};

export default Review;
