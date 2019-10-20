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
    const { products } = this.props.productsState
      // <Product product={product} {...this.props} />
    return products.map((product) => (
      <ProductListItem key={product.id} product={product}/>
    ))
  }

  render() {
    const { selectedProductId} = this.props.productsState
    return (
      <>
        <List>
          {this.getProductsList()}
        </List>
        { selectedProductId && <Product/> }
      </>
    );
  }
}

const mapStateToProps = ({ productsState }) => ({
  productsState
})

const mapDispatchToProps = {
  fetchProducts: fetchProductsAction,
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
