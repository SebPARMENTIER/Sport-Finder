import axios from 'axios'

import {
  CREATE_REVIEW,
  GET_ALL_REVIEWS,
  UPDATE_REVIEW,
  createReviewSuccessAction,
  createReviewErrorAction,
  getAllReviewsSuccessAction,
  getAllReviewsErrorAction,
  updateReviewSuccessAction,
  updateReviewErrorAction,
} from 'src/actions/review';

const reviewMiddleware = (store) => (next) => (action) => {
  const state = store.getState();
  switch (action.type) {
    case CREATE_REVIEW: {
      const config = {
        method: 'post',
        url: 'https://sportfinder.herokuapp.com/api/v1/review',
        headers: {
          'Content-Type': 'application/json',
        },
        data: {
          content: state.review.reviewContent,
          star: '1',
          associationId: state.review.associationId,
          user_id: state.user.userId,
        },
      };
      axios(config)
        .then((response) => {
          store.dispatch(createReviewSuccessAction(response.data));
        })
        .catch((error) => {
          store.dispatch(createReviewErrorAction());
        });
        break;
      };
      case GET_ALL_REVIEWS: {
        const config = {
          method: 'get',
          url: 'https://sportfinder.herokuapp.com/api/v1/review',
          headers: {
            'Content-Type': 'application/json',
          }
        };
        axios(config)
          .then((response) => {
            store.dispatch(getAllReviewsSuccessAction(response.data));
            console.log('middleware review get all:', response.data);
          })
          .catch((error) => {
            store.dispatch(getAllReviewsErrorAction());
          });
          break;
      };
      case UPDATE_REVIEW: {
        const config = {
          method: 'patch',
          url: `https://sportfinder.herokuapp.com/api/v1/review/${state.review.reviewId}`,
          headers: {
            'Content-Type': 'application/json',
          },
          data: {
            content: state.review.newReviewContent,
            star: '1',
            associationId: state.review.associationId,
            user_id: state.user.userId,
          },
        };
        axios(config)
          .then((response) => {
            store.dispatch(updateReviewSuccessAction(response.data));
          })
          .catch((error) => {
            store.dispatch(updateReviewErrorAction());
          });
          break;
      }   
    default:
        next(action);
  }    
};

export default reviewMiddleware;