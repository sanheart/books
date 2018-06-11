import React, { Component } from 'react'
import "./App.css";
import BookShelf1 from './BookShelf1'
import * as BooksAPI from './BooksAPI'
import {Link} from 'react-router-dom'
import { Route } from 'react-router-dom'
import Search1 from './Search1'


class App1 extends Component {
  state = {
    //需要将书籍传递给BookShlf组件
    books: []
  }

  //从外部BooksAPI获取数据，应使用componentDidMount生命周期事件

  componentDidMount() {
    //调用BooksAPI中的getAll方法
    BooksAPI.getAll().then((books) => {
      this.setState({books})
      //获得了九本书
      //console.log(books.map((book) => book.shelf))
      //console.log(books.filter((book) => (book.shelf === 'currentlyReading')))
      //console.log(books.map((book) => book.authors))
    }).catch(e => console.log(e))
  }

  //移动书
  moveBook = (book, shelf) => {
      if(this.state.books) {
        // console.log(BooksAPI.update(book, shelf))
        // console.log(book)
        // //传入的是要转移的书架
        // console.log(shelf)
        console.log(this.state.books)
        BooksAPI.update(book, shelf).then(() => {
          book.shelf = shelf
          this.setState(state => (
            {
              books: state.books
                .filter(oneBook => oneBook.id !== book.id)
                .concat([book])
            }
          ))
          console.log(this.state.books)
          //this.setState({books: this.state.books})
        })
      }
  }

  render() {
    return(
      <div className='app'>
        {/*书架展示页*/}
        <Route exact path='/' render={() => (
          <div className='list-books'>
            {/*主页头部*/}
            <div className='list-books-title'>
              <h1>My Reads</h1>
            </div>
            {/*书架组件*/}
            <BookShelf1
              onMoveBook = {this.moveBook}
              books = {this.state.books}
            />
            {/*主页跳转到搜索页面*/}
            <div className='open-search'>
              <Link to='/search' >Add a book</Link>
            </div>
          </div>
        )}/>
        {/*搜索页面
          1. 移动完书后，返回书架页面*/}
        <Route path='/search' render={({ history }) => (
          <Search1
            onMoveBook = {(book, shelf) => {
              this.moveBook(book, shelf)
              history.push('/')
            }}
            books = {this.state.books}
          />
        )}/>
      </div>
    )
  }
}

export default App1
