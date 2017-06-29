import React, {Component} from 'react'
import SubTitle from '../components/subTitle'
import * as BooksAPI from '../BooksAPI'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      book: undefined
    }
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

    console.log(this.props)

    if (book) {
      return (
        <div>
          <SubTitle title={book.title} to='/'/>
          <div className='book-details'>
            <div className='left'>
              <img className='book-image' alt={book.title} src={book.imageLinks.thumbnail.replace('zoom=1', 'zoom=2')}/>
              <div className='preview-container'>
                <a className='button' href={book.previewLink}>Preview book</a>
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

export default Home
