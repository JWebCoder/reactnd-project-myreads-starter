import React from 'react'
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
      <div className="book-authors">{props.authors}</div>
    </Link>
  </div>
)

export default Book
