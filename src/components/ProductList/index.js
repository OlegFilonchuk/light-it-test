import React, { Component } from 'react';
import { fetchProductsAction } from './../../redux/reducers/productsReducer'
import { List } from '@material-ui/core'
import { connect } from 'react-redux'
import Product from '../Product';
import './index.css';
import ProductListItem from "../ProductListItem"

class ProductList extends Component {

  componentDidMount() {
    this.props.fetchProducts()
  }

  getProductsList = () => {
      // <Product product={product} {...this.props} />
    return this.props.products.map((product) => (
      <ProductListItem key={product.id} product={product}/>
    ))
  }

  render() {
    return (
      <List>
        {this.getProductsList()}
      </List>
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
