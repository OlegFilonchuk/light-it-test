const REVIEWS_FETCHED = 'REVIEWS_FETCHED'
const POST_REVIEW = 'POST_REVIEW'

export const postReviewAction = (review) => async (dispatch) => {
  const rawRes = await fetch(`http://smktesting.herokuapp.com/api/reviews/${review.id}`, {
    method: 'POST',
    body: JSON.stringify(review.data),
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Token ${localStorage.getItem('a_token')}`
    }
  })
  const response = rawRes.json()
  console.log(response)
}

export const fetchReviewsAction = (review) => async (dispatch) => {
  const rawRes = await fetch(`http://smktesting.herokuapp.com/api/reviews/${review.id}`)
  const response = rawRes.json()
  dispatch({
    type: REVIEWS_FETCHED,
    payload: response
  })
}

const initialState = {
  reviews: []
}

export const reviewReducer = (state=initialState, action) => {
  const {type, payload} = action

  switch (type) {
    case REVIEWS_FETCHED:
      return {
        ...state,
        reviews: payload
      }
    default:
      return state
  }
}
