import React, { Component } from 'react';
import { loadAction } from './redux/reducers/productsReducer';
import { connect } from 'react-redux'
import Product from './components/Product';
import './App.css';

class App extends Component {

  componentDidMount() {
    this.props.loadProducts()
  }

  getProductsList = () => {
    return this.props.productsState.map((product, i) => (
      <li key={i}>
        <Product product={product} />
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
  loadProducts: loadAction
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
