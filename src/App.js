import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom'
import ProductList from './components/ProductList';
import ProductPage from './components/ProductPage/index';
import { createBrowserHistory } from 'history' 
import './App.css';

const history = createBrowserHistory()

class App extends Component {

  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={ProductList}/>
          <Route exact path="/product/:id" component={ProductPage}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
