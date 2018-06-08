import React, { Component } from 'react'

class Book1 extends Component {
	render() {

		return (
			<div className='book'>
				<div className='book-top'>
					{/*书的背景图片，如果不存在的话则为空*/}
					<div className='book-cover' style={{
						width: 128,
						height: 193,
						backgroundImage: `url(${this.props.book.imageLinks !== undefined ? this.props.book.imageLinks.thumbnail : ''})`
					}}>
					</div>
					<div className='book-shelf-changer'>
						<select>
							<option value='none' disabled>Move to...</option>
							<option value='currentlyReading' >Currently Reading</option>
							<option value='wantToRead' >Want to Read</option>
							<option value='read' >Read</option>
							<option value='none' >None</option>
						</select>
					</div>
				</div>
				<div className='book-title'>
					{this.props.book.title}
				</div>
				<div className='book-authors'>
					{/*book.authors返回的是一个数组，需要转化成字符串才可以显示*/}
					{this.props.book.authors.toString()}
				</div>
			</div>
		)
	}
}

export default Book1
