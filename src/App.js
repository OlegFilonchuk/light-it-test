import React, { Component } from 'react';
import { Router, Route, Switch, browserHistory } from 'react-router-dom'
import ProductList from './components/ProductList';
import ProductPage from './components/ProductPage/index';
import AuthPage from './components/AuthPage/index';
import { history } from './utils/history' 
import './App.css'

class App extends Component {

  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={ProductList}/>
          <Route exact path="/product/:id" component={ProductPage}/>
          <Route exact path="/login" component={AuthPage}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
