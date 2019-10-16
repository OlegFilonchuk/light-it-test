import React, { Component } from 'react';
import { fetchProductsAction } from './../../redux/reducers/productsReducer';
import { connect } from 'react-redux'
import Product from '../Product';
import './index.css';
import { preloadImage } from './../../redux/reducers/imagesReducer';

class ProductList extends Component {

  async componentDidMount() {
    await this.props.fetchProducts()
    await this.props.products.forEach((item) => {
      this.props.fetchImage(`http://smktesting.herokuapp.com/api/reviews/${item.id}`)
    })
    //TODO: images preloading to redux store?
  }

  getProductsList = () => {
    return this.props.products.map((product) => (
      <li key={product.id}>
        <Product product={product} {...this.props} />
      </li>
    ))
  }

  render() {
    return (
      <div className="App">
        <ul>
          {this.getProductsList()}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = ({ productsState }) => ({
    products: productsState
})

const mapDispatchToProps = {
  fetchProducts: fetchProductsAction,
  fetchImage: preloadImage
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
