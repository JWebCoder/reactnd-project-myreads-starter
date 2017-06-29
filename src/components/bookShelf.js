import React from 'react'
import Book from './book'

const bookBuilder = (book, index, props) => {
  return (
    <li key={index}>
      <Book
        bookId={book.id}
        cover={book.imageLinks.smallThumbnail}
        title={book.title}
        authors={book.authors.join(', ')}
        handleAction={action => props.handleAction(book, action)}
        book={book}
        />
    </li>
  )
}

const BookShelf = props => (
  <div className="bookshelf">
    <h2 className="bookshelf-title">{props.title}</h2>
    <div className="bookshelf-books">
      <ol className="books-grid">
        {
          props.books.filter(
            book => book.shelf === props.status
          ).map(
            (book, index) => bookBuilder(book, index, props)
          )
        }
      </ol>
    </div>
  </div>
)

export default BookShelf
