import React, {Component} from 'react'
import PropTypes from 'prop-types'


class Book extends Component {
  // 类型检查
  static propTypes = {
    book: PropTypes.object.isRequired,
    onMoveBook: PropTypes.func.isRequired
  }

  // 改变书籍所在的书架
  changeBookOnShelf(shelf) {
    this.props.onMoveBook(this.props.book, shelf)
  }

  render () {
    const {book} = this.props

    return (
      <div className="book">
       <div className="book-top">
         <div className="book-cover" style={{ height: 192, width: 128, backgroundImage: `url(${book.imageLinks !== undefined ? book.imageLinks.thumbnail: ''})` }}></div>
          <div className="book-shelf-changer">
            <select value={book.shelf} onChange={(event) => this.changeBookOnShelf(event.target.value)}>
              <option value="none" disabled>移动到...</option>
              <option value="currentlyReading">最近阅读</option>
              <option value="wantToRead">想读</option>
              <option value="read">已读</option>
              <option value="none">取消追踪</option>
            </select>
          </div>
       </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors}</div>
      </div>
    )
  }
}

export default Book
