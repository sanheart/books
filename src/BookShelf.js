import React, {Component} from 'react'
import Book from './Book'
import PropTypes from 'prop-types'
import sortBy from 'sort-by'

class BookShelf extends Component {
  // 类型检查
  static propTypes = {
    booksOnShelf: PropTypes.array.isRequired,
    onMoveBook: PropTypes.func.isRequired
  }

  render(){

    const bookshelf_title = ["currentlyReading", "wantToRead", "read"]

    return(
      <div>
        {bookshelf_title.map((bookshelf,index)=>(
          <div className="bookshelf" key={index}>
            <h2 className="bookshelf-title">{bookshelf_title[index]}</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                {this.props.booksOnShelf.sort(sortBy('title'))
                  .filter(book => book.shelf === bookshelf)
                  .map(book => (
                    // BookShelf组件内插入Book组件
                    <Book
                      onMoveBook={this.props.onMoveBook}
                      key={book.id}
                      book={book}
                    />
                  ))
                }
              </ol>
            </div>
          </div>
        ))}
    </div>
    )
  }
}

export default BookShelf
