/* eslint-disable no-lone-blocks */
import axios from 'axios';

import {
  CREATE_REVIEW,
  GET_ALL_REVIEWS,
  UPDATE_REVIEW,
  DELETE_REVIEW,
  CREATE_REVIEW_AFTER_CREATE_ASSOCIATION,
  createReviewSuccessAction,
  createReviewErrorAction,
  getAllReviewsSuccessAction,
  getAllReviewsErrorAction,
  updateReviewSuccessAction,
  updateReviewErrorAction,
  deleteReviewSuccessAction,
  deleteReviewErrorAction,
  createAssociationSuccessAction,
  createReviewAfterCreateAssociation,
  getAllReviewsAction,
} from 'src/actions/review';

const reviewMiddleware = (store) => (next) => (action) => {
  const state = store.getState();
  switch (action.type) {
    case CREATE_REVIEW: {
      axios({
        method: 'get',
        url: 'https://sportfinder.herokuapp.com/api/v1/association',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((response) => {
          const associationExists = response.data;
          const associationFiltered = associationExists.filter(
            (elem) => elem.key_association.includes(state.review.associationKey),
          );
          if (associationFiltered == true) {
            axios({
              method: 'post',
              url: 'https://sportfinder.herokuapp.com/api/v1/review',
              headers: {
                'Content-Type': 'application/json',
              },
              data: {
                content: state.review.reviewContent,
                star: 1,
                association_id: associationFiltered[0].id,
                user_id: state.user.userId,
              },
            })
              .then((response) => {
                store.dispatch(createReviewSuccessAction(response.data));
                //store.dispatch(getAllReviewsAction());
              })
              .catch((error) => {
                store.dispatch(createReviewErrorAction());
              });
          }
          else {
            axios({
              method: 'post',
              url: 'https://sportfinder.herokuapp.com/api/v1/association',
              headers: {
                'Content-Type': 'application/json',
              },
              data: {
                key_association: state.review.associationKey,
                name: state.review.singleAssociationName,
              },
            })
              .then((response) => {
                store.dispatch(createAssociationSuccessAction(response.data));
                store.dispatch(createReviewAfterCreateAssociation());
              })
              .catch((error) => {
                console.log(error);
              });
          }
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    }
    case CREATE_REVIEW_AFTER_CREATE_ASSOCIATION: {
      axios({
        method: 'post',
        url: 'https://sportfinder.herokuapp.com/api/v1/review',
        headers: {
          'Content-Type': 'application/json',
        },
        data: {
          content: state.review.reviewContent,
          star: 1,
          association_id: state.review.associationId,
          user_id: state.user.userId,
        },
      })
        .then((response) => {
          store.dispatch(createReviewSuccessAction(response.data));
        })
        .catch((error) => {
          store.dispatch(createReviewErrorAction());
        });
      break;
    }
    case GET_ALL_REVIEWS: {
      const config = {
        method: 'get',
        url: 'https://sportfinder.herokuapp.com/api/v1/review',
        headers: {
          'Content-Type': 'application/json',
        },
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
    }
    case UPDATE_REVIEW: {
      const config = {
        method: 'patch',
        url: `https://sportfinder.herokuapp.com/api/v1/review/${state.review.reviewId}`,
        headers: {
          'Content-Type': 'application/json',
        },
        data: {
          id: state.review.reviewId,
          content: state.review.newReviewContent,
          star: 1,
          associationKey: 1,
          user_id: state.user.userId,
        },
      };
      axios(config)
        .then((response) => {
          store.dispatch(updateReviewSuccessAction(response.data));
          store.dispatch(getAllReviewsAction());
        })
        .catch((error) => {
          store.dispatch(updateReviewErrorAction());
        });
      break;
    }
    case DELETE_REVIEW: {
      const config = {
        method: 'delete',
        url: `https://sportfinder.herokuapp.com/api/v1/review/${state.review.reviewId}`,
        headers: {
          'Content-Type': 'application/json',
        },
        data: {
          id: state.review.reviewId,
        },
      };
      axios(config)
        .then((response) => {
          store.dispatch(deleteReviewSuccessAction(response.data));
        })
        .catch((error) => {
          store.dispatch(deleteReviewErrorAction());
        });
      break;
    }
    default:
      next(action);
  }
};

export default reviewMiddleware;
