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
  GET_ID_REVIEW_VALUE,
  GET_SINGLE_ASSOCIATION_NAME_VALUE,
  GET_SINGLE_ASSOCIATION_KEY_VALUE,
  CREATE_ASSOCIATION_SUCCESS,
  CLICK_STAR_VALUE,
  GET_ALL_REVIEWS_FOR_AN_ASSOCIATION_SUCCESS,
} from 'src/actions/review';

export const initialState = {
  reviewContent: '',
  isCreateReviewError: false,
  openAddReview: false,
  associationKey: '',
  reviewId: '',
  allReviews: [],
  newReviewContent: '',
  openUpdateReview: false,
  isUpdateReviewError: false,
  openDeleteReview: false,
  isDeleteReviewError: false,
  singleAssociationName: '',
  associationId: '',
  rating: 1,
  reviewsForAvg: [],
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
        rating: 1,
        reviewContent: '',
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
        rating: 1,
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
        rating: 1,
      };
    case CLICK_ON_BUTTON_UPDATE_REVIEW:
      return {
        ...state,
        openUpdateReview: !state.openUpdateReview,
        newReviewContent: action.value1,
        rating: action.value2,
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
    case GET_ID_REVIEW_VALUE:
      return {
        ...state,
        reviewId: action.value,
      };
    case GET_SINGLE_ASSOCIATION_NAME_VALUE:
      return {
        ...state,
        singleAssociationName: action.value,
      };
    case GET_SINGLE_ASSOCIATION_KEY_VALUE:
      return {
        ...state,
        associationKey: action.value,
      };
    case CREATE_ASSOCIATION_SUCCESS:
      return {
        ...state,
        associationId: action.data.association.id,
      };
    case CLICK_STAR_VALUE:
      return {
        ...state,
        rating: action.data,
      };
    case GET_ALL_REVIEWS_FOR_AN_ASSOCIATION_SUCCESS:
      return {
        ...state,
        reviewsForAvg: action.data,
      };
    default:
      return state;
  }
};

export default reducer;
