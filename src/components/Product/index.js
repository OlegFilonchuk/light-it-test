import React, { Component } from 'react'
import './index.css'
import { connect } from 'react-redux';
import ReviewForm from './../ReviewForm/';
import {fetchReviewsAction} from "../../redux/reducers/reviewsReducer"

class Product extends Component {

	getProduct = () => this.props.productsState.products.filter((product) => product.id === this.props.productsState.selectedProductId)[0]

	render() {

		const { id, title, img, text } = this.getProduct()
		const { reviews } = this.props.reviewsState
		const { selectedProductId } = this.props.productsState

		return (

			<div>
					<div><img src={`http://smktesting.herokuapp.com/static/${img}`} alt={`product ${id}`}/></div>
					<div>id: {id}</div>
					<div>title: {title}</div>
					<div>text: {text}</div>
					<ReviewForm productId={id}/>
					<ul>
          {id === selectedProductId && reviews.map((item) => (
            <li key={item.id}>
              <div>{item.rate}</div>
              <div>{item.text}</div>
              <div>{item.created_by.username}</div>
              <div>{item.created_at}</div>
            </li>
          ))}
        </ul>
			</div>
		)
	}
}

const mapStateToProps = ({reviewsState, productsState}) => ({
	reviewsState,
	productsState
})

const mapDispatchToProps = {
	fetchReviews: fetchReviewsAction,
}

export default connect(mapStateToProps, mapDispatchToProps)(Product)
