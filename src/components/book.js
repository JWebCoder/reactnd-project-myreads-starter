import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

const Book = props => (
  <div className="book">
    <div className="book-shelf-changer">
      <select defaultValue='dis' onChange={e => {props.handleAction(e.target.value)}}>
        <option value="dis" disabled>Move to...</option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
    <Link
      to={{
        pathname: `/details/${props.bookId}`,
        state: props.book
      }}
      className='book-link'
      >
      <div className="book-top">
        <div className="book-cover" style={{width: 128, height: 193, backgroundImage: `url("${props.cover}")` }}></div>
      </div>
      <div className="book-title">{props.title}</div>
      {props.authors && props.authors.length > 0 && (
        <div className="book-authors">
          {props.authors.map(
            (author, index) => <p key={index}>{author}</p>
          )}
        </div>
      )}
    </Link>
  </div>
)

Book.propTypes = {
  title: PropTypes.string.isRequired,
  bookId: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
  handleAction: PropTypes.func.isRequired,
  book: PropTypes.object.isRequired,
  authors: PropTypes.array
}

export default Book
