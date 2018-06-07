import React, { Component } from 'react'
import "./App.css";
import * as BooksAPI from './BooksAPI'

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
      console.log(books)
    })
  }
  render() {
    return(
      <div className='app'>
        <div className='list-books'>
          {/*主页头部*/}
          <div className='list-books-title'>
            <h1>My Reads</h1>
          </div>
          {/*书架组件*/}
          <div className='open-search'>
            <a>Add a book</a>
          </div>
        </div>
      </div>
    )
  }
}

export default App1
