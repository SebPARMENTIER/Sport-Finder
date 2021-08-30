import {
  SET_REVIEW_INPUT_VALUE,
  CREATE_REVIEW_SUCCESS,
  CREATE_REVIEW_ERROR,
  CLICK_ON_BUTTON_ADD_REVIEW,
  CLICK_ON_BUTTON_CLOSE_ADD_REVIEW,
  GET_ALL_REVIEWS_SUCCESS,
  GET_ALL_REVIEWS_ERROR,
} from 'src/actions/review';

export const initialState = {
  reviewContent: '',
  isCreateReviewError: false,
  openAddReview: false,
  associationId: 36847686,
  allReviews: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_REVIEW_INPUT_VALUE:
      return {
        ...state,
        [action.name]: action.value,
      };
    case CREATE_REVIEW_SUCCESS:
      return {
        ...state,
        openAddReview: false,
      };
    case CREATE_REVIEW_ERROR:
      return {
        ...state,
        isCreateReviewError: true,
      };
    case CLICK_ON_BUTTON_ADD_REVIEW:
      return {
        ...state,
        openAddReview: false,
        isCreateReviewError: false,
      };
    case CLICK_ON_BUTTON_CLOSE_ADD_REVIEW:
      return {
        ...state,
        openAddReview: false,
      };
    case GET_ALL_REVIEWS_SUCCESS:
      return {
        ...state,
        allReviews: action.data,
      }
    default:
      return state;
  }
};

export default reducer;