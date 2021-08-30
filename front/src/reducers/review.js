import {
  SET_REVIEW_INPUT_VALUE,
  CREATE_REVIEW_SUCCESS,
  CREATE_REVIEW_ERROR,
  CLICK_ON_BUTTON_ADD_REVIEW,
  CLICK_ON_BUTTON_CLOSE_ADD_REVIEW,
  GET_ALL_REVIEWS_SUCCESS,
  UPDATE_REVIEW_VALUE,
  UPDATE_REVIEW_SUCCESS,
  UPDATE_REVIEW_ERROR,
  CLICK_ON_BUTTON_CLOSE_UPDATE_REVIEW,
  CLICK_ON_BUTTON_UPDATE_REVIEW,
  CLICK_ON_BUTTON_CLOSE_DELETE_REVIEW,
  DELETE_REVIEW_SUCCESS,
  DELETE_REVIEW_ERROR,
  CLICK_ON_BUTTON_DELETE_REVIEW,
  CLICK_STAR_VALUE,
} from 'src/actions/review';

export const initialState = {
  reviewContent: '',
  isCreateReviewError: false,
  openAddReview: false,
  associationId: 36847686,
  reviewId: '',
  allReviews: [],
  newReviewContent: '',
  openUpdateReview: false,
  isUpdateReviewError: false,
  openDeleteReview: false,
  isDeleteReviewError: false,
  rating: 0,
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
        reviewId: action.data.id,
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
        openAddReview: true,
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
      };
    case UPDATE_REVIEW_VALUE:
      return {
        ...state,
        [action.name]: action.value,
      };
    case UPDATE_REVIEW_SUCCESS:
      return {
        ...state,
        openUpdateReview: false,
      };
    case UPDATE_REVIEW_ERROR:
      return {
        ...state,
        isUpdateReviewError: true,
      };
    case CLICK_ON_BUTTON_CLOSE_UPDATE_REVIEW:
      return {
        ...state,
        openUpdateReview: false,
        isUpdateReviewError: false,
      };
    case CLICK_ON_BUTTON_UPDATE_REVIEW:
      return {
        ...state,
        openUpdateReview: !state.openUpdateReview,
      };
    case CLICK_ON_BUTTON_CLOSE_DELETE_REVIEW:
      return {
        ...state,
        openDeleteReview: false,
        isDeleteReviewError: false,
      };
    case DELETE_REVIEW_SUCCESS:
      return {
        ...state,
        openDeleteReview: false,
      };
    case DELETE_REVIEW_ERROR:
      return {
        ...state,
        isDeleteReviewError: true,
      };
    case CLICK_ON_BUTTON_DELETE_REVIEW:
      return {
        ...state,
        openDeleteReview: !state.openDeleteReview,
      };
    case CLICK_STAR_VALUE:
      return {
        ...state,
        rating: action.data,
      };
    default:
      return state;
  }
};

export default reducer;
