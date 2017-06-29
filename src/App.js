import React, {Component} from 'react'
import {Route} from 'react-router-dom'
// Screens
import Home from './screens/home'
import Search from './screens/search'
// Main styles
import './App.css'

class BooksApp extends Component {
  render() {
    return (
      <div className='app'>
        <Route exact path='/' render={
          () => <Home/>
        }/>
        <Route exact path='/search' render={
          () => (
            <Search/>
          )
        }/>
      </div>
    )
  }
}

export default BooksApp
