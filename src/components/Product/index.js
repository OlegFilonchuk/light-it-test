import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './index.css'
import { connect } from 'react-redux';

class Product extends Component {

	state = {
		reviews: []
	}

	loadReviews = async (id) => {
		const rawRes = await fetch(`http://smktesting.herokuapp.com/api/reviews/${id}`)
		const result = await rawRes.json()
		this.setState({reviews: result})
	}

	render() {

		const { id, title, img, text } = this.props.product
		return (
			<Link to={`/product/${id}`}>
				<div><img src={`http://smktesting.herokuapp.com/static/${img}`} alt={`product ${id}`}/></div>
				<div>id: {id}</div>
				<div>title: {title}</div>
				<div>text: {text}</div>
			</Link>
		)
	}
}

const mapStateToProps = ({imagesState}) => ({
	images: imagesState
})

export default connect(mapStateToProps)(Product)