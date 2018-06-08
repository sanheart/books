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
    })
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
              books = {this.state.books}
            />
            {/*主页跳转到搜索页面*/}
            <div className='open-search'>
              <Link to='/search' >Add a book</Link>
            </div>
          </div>
        )}/>
        {/*搜索页面*/}
        <Route path='/search' render={() => (
          <Search1 />
        )}/>
      </div>
    )
  }
}

export default App1
