import React, { Component } from 'react'
import './index.css'
import { connect } from 'react-redux';
import ReviewForm from './../ReviewForm/';

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
			<div className='product-desc' onClick={() => {this.loadReviews(id);console.log('click')}}>
					<div><img src={`http://smktesting.herokuapp.com/static/${img}`} alt={`product ${id}`}/></div>
					<div>id: {id}</div>
					<div>title: {title}</div>
					<div>text: {text}</div>
					<ReviewForm id={id}/>
					<ul>
          {this.state.reviews.map((item) => (
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

const mapStateToProps = ({imagesState}) => ({
	images: imagesState
})

export default connect(mapStateToProps)(Product)