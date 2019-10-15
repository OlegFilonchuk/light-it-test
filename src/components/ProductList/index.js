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
    return this.props.productsState.map((product, i) => (
      <li key={i}>
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

const mapStateToProps = ({productsState}) => {
  return { productsState }
}

const mapDispatchToProps = {
  fetchProducts: fetchProductsAction
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
