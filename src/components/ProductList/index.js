import React, { Component } from 'react';
import { fetchProductsAction } from './../../redux/reducers/productsReducer';
import { connect } from 'react-redux'
import Product from '../Product';
import './index.css';

class ProductList extends Component {

  componentDidMount() {
    this.props.fetchProducts()
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

const mapStateToProps = ({ productsState }) => {
  const {products} = productsState
  return {products}
}

const mapDispatchToProps = {
  fetchProducts: fetchProductsAction,
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
