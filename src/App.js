import React, { Component } from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import ProductList from './components/ProductList'
import AuthPage from './components/AuthPage/index'
import { history } from './utils/history'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './App.css'

class App extends Component {

  render() {
    return (
      <Router history={history}>
        <>
          <Switch>
            <Route exact path="/" component={ProductList}/>
            <Route exact path="/login" component={AuthPage}/>
          </Switch>
          <ToastContainer
            position="top-center"
            autoClose={3000}
            hideProgressBar={true}
            newestOnTop={false}
            closeOnClick
            pauseOnVisibilityChange
            pauseOnHover
          />
        </>
      </Router>
    )
  }
}

export default App

