import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchProductsAction } from './../../redux/reducers/productsReducer';

class ProductPage extends Component {

  state = {
    reviews: []
  }

  componentDidMount() {
		this.loadReviews(this.props.match.params.id)
  }

  loadReviews = async (id) => {
    const rawRes = await fetch(`http://smktesting.herokuapp.com/api/reviews/${id}`)
    const result = await rawRes.json()
    this.setState({ reviews: result })
  }

  render() {
    const { id, title, text, img } = this.props.products.filter((item) => +item.id === +this.props.match.params.id)[0]

    return (
      <div>
        <div><img src={`http://smktesting.herokuapp.com/static/${img}`} alt={`product ${id}`} /></div>
        <div>id: {id}</div>
        <div>title: {title}</div>
        <div>text: {text}</div>
        <ul>
          {this.state.reviews.map((item) => (
            <li key={item.id}>
              <div>{item.rate}</div>
              <div>{item.text}</div>
              <div>{item.created_by.username}</div>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = ({ productsState }) => {
  return {
    products: productsState
  }
}

const mapDispatchToProps = {
  fetchProducts: fetchProductsAction
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage)