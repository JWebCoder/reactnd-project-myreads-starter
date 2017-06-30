import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import _ from 'lodash'
import * as BooksAPI from '../BooksAPI'
import Book from '../components/book'

class Search extends Component {
  constructor() {
    super()
    this.state = {
      text: localStorage.getItem('searchText') || '',
      books: []
    }

    this.submitText = _.debounce(this.submitText, 500)
  }

  componentDidMount() {
    if (localStorage.getItem('searchText')) {
      this.setState({
        books: JSON.parse(localStorage.getItem('searchResults'))
      })
    }
  }

  submitText(val) {
    BooksAPI.search(val).then(
      res => {
        localStorage.setItem('searchResults', JSON.stringify(res))
        this.setState({
          books: res
        })
      }
    )
  }

  handleTextChange(val) {
    localStorage.setItem('searchText', val)
    this.setState({
      text: val
    })
    this.submitText(val)
  }

  updateBook(book, action) {
    BooksAPI.update(book, action)
  }

  bookBuilder(book, index) {
    return (
      <li key={index}>
        <Book
          bookId={book.id}
          cover={book.imageLinks.smallThumbnail}
          title={book.title}
          authors={book.authors}
          handleAction={action => this.updateBook(book, action)}
          book={book}
          />
      </li>
    )
  }

  render() {
    return (
      <div className="page search-books">
        <div className="search-books-bar">
          <Link className="close-search" to='/'>Close</Link>
          <div className="search-books-input-wrapper">
            <input value={this.state.text} type="text" placeholder="Search by title or author" onChange={(e) => this.handleTextChange(e.target.value)}/>
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {
              this.state.books.length > 0 && this.state.books.map(
                (book, index) => this.bookBuilder(book, index)
              )
            }
          </ol>
        </div>
      </div>
    )
  }
}

export default Search
