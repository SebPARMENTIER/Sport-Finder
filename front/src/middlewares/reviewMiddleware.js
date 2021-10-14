/* eslint-disable max-len */
/* eslint-disable no-console */
/* eslint-disable import/no-unresolved */
// == Import : npm
import axios from 'axios';

// == Import : local
import {
  CREATE_REVIEW,
  GET_ALL_REVIEWS,
  UPDATE_REVIEW,
  DELETE_REVIEW,
  CREATE_REVIEW_AFTER_CREATE_ASSOCIATION,
  GET_ALL_REVIEWS_FOR_AN_ASSOCIATION,
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
  getAllReviewsForAnAssociationSuccessAction,
} from 'src/actions/review';

const reviewMiddleware = (store) => (next) => (action) => {
  const state = store.getState();
  switch (action.type) {
    case CREATE_REVIEW: {
      // Request to check if association exists
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
          // If association exists, add review on DB
          if (associationFiltered.length > 0) {
            axios({
              method: 'post',
              url: 'https://sportfinder.herokuapp.com/api/v1/review',
              headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${state.user.token}`,
              },
              data: {
                content: state.review.reviewContent,
                star: state.review.rating,
                association_id: associationFiltered[0].id,
                user_id: state.user.userId,
              },
            })
              .then((response2) => {
                store.dispatch(createReviewSuccessAction(response2.data));
                store.dispatch(getAllReviewsAction());
              })
              .catch((error) => {
                console.error(error);
                store.dispatch(createReviewErrorAction());
              });
          }
          // If association doesn't exist, create association on DB and add action to add review on DB
          else if (associationFiltered.length === 0) {
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
              .then((response2) => {
                store.dispatch(createAssociationSuccessAction(response2.data));
                store.dispatch(createReviewAfterCreateAssociation());
              })
              .catch((error) => {
                console.error(error);
              });
          }
        })
        .catch((error) => {
          console.error(error);
        });
      break;
    }
    case CREATE_REVIEW_AFTER_CREATE_ASSOCIATION: {
      axios({
        method: 'post',
        url: 'https://sportfinder.herokuapp.com/api/v1/review',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${state.user.token}`,
        },
        data: {
          content: state.review.reviewContent,
          star: state.review.rating,
          association_id: state.review.associationId,
          user_id: state.user.userId,
        },
      })
        .then((response) => {
          store.dispatch(createReviewSuccessAction(response.data));
          store.dispatch(getAllReviewsAction());
        })
        .catch((error) => {
          store.dispatch(createReviewErrorAction());
          console.error(error);
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
        })
        .catch((error) => {
          store.dispatch(getAllReviewsErrorAction());
          console.error(error);
        });
      break;
    }
    case UPDATE_REVIEW: {
      const config = {
        method: 'patch',
        url: `https://sportfinder.herokuapp.com/api/v1/review/${state.review.reviewId}`,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${state.user.token}`,
        },
        data: {
          id: state.review.reviewId,
          content: state.review.newReviewContent,
          star: state.review.rating,
          associationKey: state.review.key_association,
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
          console.error(error);
        });
      break;
    }
    case DELETE_REVIEW: {
      const config = {
        method: 'delete',
        url: `https://sportfinder.herokuapp.com/api/v1/review/${state.review.reviewId}`,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${state.user.token}`,
        },
        data: {
          id: state.review.reviewId,
        },
      };
      axios(config)
        .then((response) => {
          store.dispatch(deleteReviewSuccessAction(response.data));
          store.dispatch(getAllReviewsAction());
        })
        .catch((error) => {
          store.dispatch(deleteReviewErrorAction());
          console.error(error);
        });
      break;
    }
    case GET_ALL_REVIEWS_FOR_AN_ASSOCIATION: {
      const config = {
        method: 'get',
        url: 'https://sportfinder.herokuapp.com/api/v1/association',
        headers: {
          'Content-Type': 'application/json',
        },
      };
      axios(config)
        .then((response) => {
          store.dispatch(getAllReviewsForAnAssociationSuccessAction(response.data));
        })
        .catch((error) => {
          console.error(error);
        });
      break;
    }
    default:
      next(action);
  }
};

// == Export
export default reviewMiddleware;
