import axios from 'axios'
import { baseUrl } from "./baseUrl"

axios.defaults.baseURL = baseUrl

export const getProducts = () => {
  return axios.get(`/products/`)
}

export const loginUser = (form) => {
  return axios.post(`/login/`, form)
}

export const registerUser = (form) => {
  return axios.post(`/register/`, form)
}

export const fetchReviews = (productId) => {
  return axios.get(`/reviews/${productId}`)
}

export const postReview = (productId, data) => {
  return axios.post(`/reviews/${productId}`, data, {
    headers: {
      'Authorization': `Token ${localStorage.getItem('a_token')}`
    }
  })
}
