export const REVIEWS_REQUEST = 'REVIEWS_REQUEST'
export const REVIEWS_RESPONSE = 'REVIEWS_RESPONSE'
export const REVIEWS_ERROR = 'REVIEWS_ERROR'
export const REVIEWS_FETCH = 'REVIEWS_FETCH'
export const REVIEW_POST = 'REVIEW_POST'
export const POST_REVIEW_REQUEST = 'POST_REVIEW_REQUEST'
export const POST_REVIEW_RESPONSE = 'POST_REVIEW_RESPONSE'
export const POST_REVIEW_ERROR = 'POST_REVIEW_ERROR'

export const fetchReviewsAction = (productId) => ({
  type: REVIEWS_FETCH,
  payload: productId
})

export const postReviewAction = (review) => ({
  type: REVIEW_POST,
  payload: review
})

const initialState = {
  reviews: [],
  isFetching: false,
  error: null
}

export const reviewsReducer = (state=initialState, action) => {
  const {type, payload} = action

  switch (type) {
    case REVIEWS_REQUEST:
    case POST_REVIEW_REQUEST:
      return {
        ...state,
        isFetching: true
      }

    case REVIEWS_RESPONSE:
      return {
        ...state,
        reviews: payload,
        isFetching: false,
        error: null
      }

    case POST_REVIEW_RESPONSE:
      return {
        ...state,
        isFetching: false,
        error: null
      }

    default:
      return state
  }
}
