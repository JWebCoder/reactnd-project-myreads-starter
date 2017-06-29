import React, {Component} from 'react'
import {Route} from 'react-router-dom'
// Screens
import Home from './screens/home'
import Search from './screens/search'
import Details from './screens/details'
// Components
import Header from './components/header'
// Main styles
import './App.css'

class BooksApp extends Component {
  render() {
    return (
      <div className='app'>
        <Header/>
        <Route exact path='/' render={
          () => {
            localStorage.removeItem('searchText')
            localStorage.removeItem('searchResults')
            return <Home/>
          }
        }/>
        <Route exact path='/search' render={
          () => (
            <Search/>
          )
        }/>
        <Route exact path='/details/:bookId' component={Details}/>
      </div>
    )
  }
}

export default BooksApp
