import React, {Component} from 'react'
import SubTitle from '../components/subTitle'
import * as BooksAPI from '../BooksAPI'

class Details extends Component {
  state = {
    book: {}
  }

  getBook(id) {
    BooksAPI.get(id).then(
      book => {
        this.setState({
          book
        })
      }
    )
  }

  render() {
    const book = this.props.location.state || this.state.book

    if (book && book.id) {
      return (
        <div>
          <SubTitle title={book.title} back subtitle={book.subtitle} history={this.props.history}/>
          <div className='page book-details'>
            <div className='left'>
              <img className='book-image' alt={book.title} src={book.imageLinks.thumbnail.replace('zoom=1', 'zoom=2')}/>
              <div className='preview-container'>
                <a className='button' href={book.previewLink}>Preview book</a>
              </div>
              {book.authors && book.authors.length > 0 && (
                <div className='list'>
                  <h3>Authors</h3>
                  <ul>
                  {book.authors.map(
                    (author, index) => <li key={index}>{author}</li>
                  )}
                  </ul>
                </div>
              )}
              {book.categories && book.categories.length > 0 && (
                <div className='list'>
                  <h3>Categories</h3>
                  <ul>
                  {book.categories.map(
                    (category, index) => <li key={index}>{category}</li>
                  )}
                  </ul>
                </div>
              )}
              <div className='list'>
                <h3>Published by</h3>
                <p>{book.publisher} on {book.publishedDate}</p>
              </div>
            </div>
            <div className='right'>
              <p className='description'>{book.description}</p>
            </div>
          </div>
        </div>
      )
    } else {
      this.getBook(this.props.match.params.bookId)
      return null
    }
  }
}

export default Details
