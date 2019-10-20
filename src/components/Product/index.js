import React, { Component } from 'react'
import './index.css'
import { connect } from 'react-redux';
import ReviewForm from './../ReviewForm/';
import {fetchReviewsAction} from "../../redux/reducers/reviewsReducer"
import {productSelectAction} from "../../redux/reducers/productsReducer"

class Product extends Component {

	handleClick = () => {
		const { product: { id }, selectProduct, fetchReviews } = this.props
		selectProduct(id)
		fetchReviews(id)
	}

	render() {

		const { id, title, img, text } = this.props.product
		const { reviews } = this.props.reviewsState
		const { selectedProductId } = this.props.productsState

		return (
			<div onClick={this.handleClick}>
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
	selectProduct: productSelectAction
}

export default connect(mapStateToProps, mapDispatchToProps)(Product)
