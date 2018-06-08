import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book1 from './Book1'
import PropTypes from 'prop-types'

class Search1 extends Component {
  //类型检查
  static propTypes = {
     books: PropTypes.array
   }
  //需引入状态来跟踪输入字段query的变化,与搜索道的书
  state = {
    query: '',
    searchedBooks: []
  }

  //更新query
  updateQuery = (query) => {
    if (!query) {
      this.setState({ query: '', searchedBooks: [] })
    } else {
      this.setState({ query: query.trim() })
      //从API search方法获取搜索到的书没有self，需要利用书架信息同步
      BooksAPI.search(query).then((searchedBooks) => {
        if(searchedBooks.error){
          searchedBooks = []
        }
        searchedBooks.map(book => (
          //过滤出搜索到的图书与书架中的书相同的书，修改搜索到的书的shelf
          this.props.books.filter((oneShelfBook) => oneShelfBook.id === book.id)

          .map(oneShelfBook => book.shelf = oneShelfBook.shelf)
        ));

        this.setState({searchedBooks})
        console.log(searchedBooks)
      })
    }
  }

  render() {

    return(
      <div className='search-books'>
        <div className='search-books-bar'>
          {/*返回主页*/}
          <Link to='/' className='close-search'>Close</Link>
          {/*搜索框*/}
          <div className='search-books-input-wrapper'>
            <input
            type='text'
            placeholder='Search by titile or authot'
            value={this.state.query}
            onChange={(event) => this.updateQuery(event.target.value)}
            />
          </div>
        </div>
        {/*搜索结果展示*/}
        <div className='search-books-results'>
          <ol className='books-grid'>
            {this.state.searchedBooks.map(
              (book) => (
                <li key={book.id}>
                  {/*插入Book组件，显示书*/}
                  <Book1
                    key = {book.id}
                    book = {book}
                    />
                </li>
              )
            )}
          </ol>
        </div>
      </div>
    )
  }
}

export default Search1
