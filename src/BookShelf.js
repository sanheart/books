import React, { Component } from 'react'
import PropTypes  from 'prop-types'

class BookShelf extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired
  }

  render() {
    // const{ books } = this.props
    //
    // let currentlyReadingBooks
    // let wantToReadBooks
    // let readBooks

    return (
      <div className="list-books">
        hello
      </div>
    )
  }
}

export default BookShelf
