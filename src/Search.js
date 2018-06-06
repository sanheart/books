import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book from './Book'
import PropTypes from 'prop-types'
import sortBy from 'sort-by'

class Search extends Component {
  // 类型检查
  static propTypes = {
    booksOnShelf: PropTypes.array,
    onMoveBook: PropTypes.func.isRequired
  }

  state = {
    query: '',
    searchedBooks: []
  }


  updateSearchStr = (query) => {
    if (!query) {
      this.setState({ query: '', searchedBooks: [] })
    } else {
      // 去除searchStr前后的空格
      this.setState({ query: query.trim() })
      BooksAPI.search(query).then((searchedBooks) => {
        searchedBooks.map(book => (this.props.booksOnShelf.filter((oneShelfBook) => oneShelfBook.id === book.id)
        .map(oneShelfBook => book.shelf = oneShelfBook.shelf)));
        this.setState({searchedBooks})
      })
    }
  }

  render () {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          {/* 关闭搜索，返回主页面 */}
          <Link className="close-search" to="/">Close</Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="通过书籍名或作者名来查找..."
              onChange={(event) => this.updateSearchStr(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            <div className="bookshelf-books">
              <ol className="books-grid">
                {this.state.searchedBooks.sort(sortBy('title'))
                  .map(book => (
                    <Book
                      onMoveBook={this.props.onMoveBook}
                      key={book.id}
                      book={book}
                    />
                  ))
                }
              </ol>
            </div>
          </ol>
        </div>
      </div>
    )
  }
}

export default Search
