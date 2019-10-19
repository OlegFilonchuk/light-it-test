export const PRODUCTS_FETCH = 'PRODUCTS_FETCH'
export const PRODUCTS_REQUEST = 'PRODUCTS_REQUEST'
export const PRODUCTS_RESPONSE = 'PRODUCTS_RESPONSE'
export const PRODUCTS_ERROR = 'PRODUCTS_ERROR'

export const fetchProductsAction = () => ({
	type: PRODUCTS_FETCH
})

const initialState = {
	isFetching: false,
	products: [],
	error: null
}

export const productsReducer = (state=initialState, action) => {
	const { type, payload } = action

	switch (type) {
		case PRODUCTS_REQUEST:
			return{
				...state,
				isFetching: true
			}
		case PRODUCTS_RESPONSE:
			return {
				...state,
				isFetching: false,
				error: null,
				products: payload.products
			}
		case PRODUCTS_ERROR:
			return {
				...state,
				isFetching: false,
				error: payload.error
			}
		default:
			return state
	}
}
