
import React, { Component } from 'react'
import Book from './Book'

class BookShelf1 extends Component {
  
  render() {

  	const bookshelf_title = ['Currently Reading', 'Want to Read', 'Read']

    return(
    	<div className='list-books-content'>
    	{JSON.}
    		<div>
    			{/*遍历书架名称，创建书架*/}
    			{bookshelf_title.map((bookshelf,index) => (
    			    <div className='bookshelf' key={index}>
    					<h2 className='bookshelf-title'>{bookshelf_title[index]}</h2>
    					<div className='bookshelf-book'>
    						<ol className='books-grid'>
    						{/*获取当前书架的书*/}
    						{this.props.books.filter((book) => book.shelf === bookshelf)
    						.map(book => (
    							//插入Book组件
    							<Book />
    						))}
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
