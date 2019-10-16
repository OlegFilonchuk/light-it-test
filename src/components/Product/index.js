import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './index.css'

export default class Product extends Component {

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
				<div><img src={`http://smktesting.herokuapp.com/static/${img}`} alt={`product ${id}`} /></div>
				<div>id: {id}</div>
				<div>title: {title}</div>
				<div>text: {text}</div>
				<button onClick={() => this.loadReviews(id)}>Load reviews</button>
				<ul>
					{this.state.reviews.map((item, i) => (
						<li key={i}>
							<div>{item.rate}</div>
							<div>{item.text}</div>
							<div>{item.created_by.username}</div>
						</li>
					))}
				</ul>
			</Link>
		)
	}
}
