import { put } from 'redux-saga/effects'
import { POST_REVIEW_REQUEST, POST_REVIEW_RESPONSE, REVIEWS_REQUEST, REVIEWS_RESPONSE, REVIEWS_ERROR, POST_REVIEW_ERROR } from "../redux/reducers/reviewsReducer"
import {fetchReviews, postReview} from "../api/restApiController"

export function* fetchReviewsSaga({payload}) {
  yield put({ type: REVIEWS_REQUEST })
  try {
    const {data} = yield fetchReviews(payload)
    yield put({
      type: REVIEWS_RESPONSE,
      payload: data
    })
  } catch (e) {
    yield put({
      type: REVIEWS_ERROR,
      payload: {
        error: e
      }
    })
  }
}

export function* postReviewSaga(review) {
  yield put({ type: POST_REVIEW_REQUEST })
  try {
    console.log(review)
    const {data} = yield postReview(review.payload.productId, review.payload.data)

    yield put({
      type: POST_REVIEW_RESPONSE,
      payload: data
    })
  } catch (e) {
    yield put({
      type: POST_REVIEW_ERROR,
      payload: {
        error: e
      }
    })
  }
}
