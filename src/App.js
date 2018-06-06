import React from 'react'
import {Route, Link} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookShelf from './BookShelf'
import Search from './Search'

class BooksApp extends React.Component {
  state = {
    // 书堆数组
    books: []
  }

  moveBook = (book, shelf) => {
    if (this.state.books) {
      BooksAPI.update(book,shelf).then(() => {
        book.shelf = shelf;
        this.setState(state => ({
          books: state.books.filter(oneBook => oneBook.id !== book.id).concat([ book ])
        }))
      })
    }
  }

  // 执行componentDidMount()获取数据
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  render() {
    return (
      <div className="app">
        {/* 搜索页 */}
        <Route exact path="/search" render={() => (
          // 仅显示搜索组件
          <Search onMoveBook={this.moveBook} booksOnShelf={this.state.books}/>
        )} />
        {/* 应用首页 */}
        <Route exact path="/" render={() => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              {/* 图书架分类（三类），其中含单个图书的组件 */}
              <BookShelf onMoveBook={this.moveBook} booksOnShelf={this.state.books}/>
            </div>
            {/* 搜索按钮 */}
            <div className="open-search">
              <Link to="/search">Add a book</Link>
            </div>
          </div>
        )} />
    </div>)
  }
}

export default BooksApp
