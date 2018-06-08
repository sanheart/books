
import React, { Component } from 'react'
import Book1 from './Book1'

class BookShelf1 extends Component {

  render() {

  	const bookshelf_title = ['currentlyReading', 'wantToRead', 'read']
    const bookshelf_title_str = ['Currently Reading', 'Want to Read', 'Read']

    return(
    	<div className='list-books-content'>
    		<div>
    			{/*遍历书架名称，创建书架*/}
    			{bookshelf_title.map((bookshelf,index) => (
    			    <div className='bookshelf' key={index}>
    					<h2 className='bookshelf-title'>{bookshelf_title_str[index]}</h2>
    					<div className='bookshelf-book'>
    						<ol className='books-grid'>
                  {/* 1.获取当前书架的书 通过filter筛选出book.shelf=bookshelf
                    2.通过map遍历将对应的书(组件)显示在该书架上*/}
                    {this.props.books.filter((book) => book.shelf === bookshelf).map(
                      (book) => (
                        <li key={book.id}>
                          {/*插入Book组件，显示书*/}
                          {console.log(book.authors)}
                          {console.log(book.title)}
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
    			))}
    		</div>
    	</div>
    )
  }
}

export default BookShelf1
