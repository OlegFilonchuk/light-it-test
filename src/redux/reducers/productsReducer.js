export const PRODUCTS_FETCH = 'PRODUCTS_FETCH'
export const PRODUCTS_REQUEST = 'PRODUCTS_REQUEST'
export const PRODUCTS_RESPONSE = 'PRODUCTS_RESPONSE'
export const PRODUCTS_ERROR = 'PRODUCTS_ERROR'
const PRODUCT_SELECT = 'PRODUCT_SELECT'

export const fetchProductsAction = () => ({
	type: PRODUCTS_FETCH
})

export const productSelectAction = (id) => ({
	type: PRODUCT_SELECT,
	payload: {
		id
	}
})

const initialState = {
	isFetching: false,
	products: [],
	error: null,
	selectedProductId: ''
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
		case PRODUCT_SELECT:
			return {
				...state,
				selectedProductId: payload.id
			}
		default:
			return state
	}
}
