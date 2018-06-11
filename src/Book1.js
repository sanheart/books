import React, { Component } from 'react'
import PropTypes from 'prop-types'


class Book1 extends Component {

	static propTypes = {
		book: PropTypes.object.isRequired
	}

	//由于更改书籍的状态需要异步请求，在更改书架状态时为用户提供一些视觉上的反馈
	state = {
		shelf: ''
	}

	//改变书籍所在的书架
	changeBookOnShelf = (shelf) => {
		this.props.onMoveBook(this.props.book, shelf)
		this.setState({shelf: shelf})
	}


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
					{/*书架状态是否改变，是加载changed样式，否为changer样式*/}
					<div className={this.state.shelf ?  'book-shelf-changed': 'book-shelf-changer'}>
						{/*{JSON.stringify(this.state)}*/}
						{/*当book.shelf不存在时，shelf默认值为none*/}
						<select
							value={this.props.book.shelf ? this.props.book.shelf: 'none'}
							onChange={(event) => this.changeBookOnShelf(event.target.value)}>
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
					{this.props.book.authors}
				</div>
			</div>
		)
	}
}

export default Book1
