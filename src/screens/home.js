import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import BookShelf from '../components/bookShelf'
import * as BooksAPI from '../BooksAPI'

class Home extends Component {
  constructor() {
    super()
    this.state = {
      books: []
    }
  }

  componentDidMount() {
    BooksAPI.getAll().then(
      books => {
        this.setState({
          books
        })
      }
    )
  }

  updateBook(book, action) {
    BooksAPI.update(book, action).then(
      res => {
        const newBooksState = this.state.books.map(
          bookState => {
            if (bookState.id === book.id) {
              bookState.shelf = action;
            }
            return bookState
          }
        )

        this.setState({
          books: newBooksState
        })
      }
    )
  }

  render() {
    const {books} = this.state

    return (
      <div className="list-books">
        <div className="list-books-content">
          <BookShelf
            title='Currently Reading'
            status='currentlyReading'
            books={books}
            handleAction={
              (book, action) => {
                this.updateBook(book, action)
              }
            }/>
          <BookShelf
            title='Want to Read'
            status='wantToRead'
            books={books}
            handleAction={
              (book, action) => {
                this.updateBook(book, action)
              }
            }/>
          <BookShelf
            title='Read'
            status='read'
            books={books}
            handleAction={
              (book, action) => {
                this.updateBook(book, action)
              }
            }/>
        </div>
        <div className="open-search">
          <Link to='/search'>Add a book</Link>
        </div>
      </div>
    )
  }
}

export default Home
