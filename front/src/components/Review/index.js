// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';
import { ImPencil2, ImBin } from 'react-icons/im';
import { FaStar } from 'react-icons/fa';

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
}) => {
  const handleModalUpdateReview = () => {
    getIdValue(id);
    onClickModalUpdateReview();
  };
  const handleModalDeleteReview = () => {
    getIdValue(id);
    onClickModalDeleteReview();
  };
  const getStarsForOneReview = () => {
    for (let i = 0; i < 5; i++) {
      if (i < star) {
        return <FaStar className="review__block1__rating__star__full" />;
      }
      return <FaStar className="review__block1__rating__star__empty" />;
    }
  };
  return (
    <div className="review">
      <div className="review__block1">
        <div className="review__block1__header">
          <div className="review__block1__header__subject">Super Club de Boxe !!! :)</div>
          <div className="review__block1__header__date">{createdAt}</div>
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
        <div className="review__block2__from">Avis de {author.pseudo}</div>
        <div className="review__block2__change">
          <div className="review__block2__change__update">
            
              <button
                type="submit"
                onClick={handleModalUpdateReview}
                //onSelect={handleGetId}
                //value={id}
              >
                <ImPencil2 />
              </button>
            
            
            
          </div>
          <div className="review__block2__change__delete">
            <ImBin onClick={handleModalDeleteReview} />
          </div>
        </div>
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
};

export default Review;
