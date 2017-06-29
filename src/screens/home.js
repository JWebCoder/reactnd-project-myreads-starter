import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Book from '../components/book'
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

  bookBuilder(book, index) {
    return (
      <li key={index}>
        <Book
          cover={book.imageLinks.smallThumbnail}
          title={book.title}
          authors={book.authors.join(', ')}
          />
      </li>
    )
  }

  render() {
    const {books} = this.state
    console.log(books)
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Currently Reading</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {
                    books.filter(
                      book => book.shelf === 'currentlyReading'
                    ).map(
                      (book, index) => this.bookBuilder(book, index)
                    )
                  }
                </ol>
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Want to Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {
                    books.filter(
                      book => book.shelf === 'wantToRead'
                    ).map(
                      (book, index) => this.bookBuilder(book, index)
                    )
                  }
                </ol>
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {
                    books.filter(
                      book => book.shelf === 'read'
                    ).map(
                      (book, index) => this.bookBuilder(book, index)
                    )
                  }
                </ol>
              </div>
            </div>
          </div>
        </div>
        <div className="open-search">
          <Link to='/search'>Add a book</Link>
        </div>
      </div>
    )
  }
}

export default Home
