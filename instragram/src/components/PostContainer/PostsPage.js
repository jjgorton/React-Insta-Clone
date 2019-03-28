import React from 'react';
import './PostsPage.css';

import dummyData from '../../dummy-data';

import SearchBar from '../SearchBar/SearchBar';
import PostContainer from './PostContainer';

class PostsPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			instraData : []
		};
	}

	componentDidMount() {
		this.setState({
			instraData : dummyData
		});
	}

	addNewComment = (e, index) => {
		const newComment = {
			id       : 'new',
			username : 'joshCodes',
			text     : e
		};

		this.setState({
			instraData : this.state.instraData.map((item) => {
				if (item.id === index) {
					item.comments.push(newComment);
				}
				return { ...item };
			})
		});
	};

	addLike = (id) => {
		this.setState({
			instraData : this.state.instraData.map((item) => {
				if (item.id === id) {
					return {
						...item,
						likes : item.likes + 1
					};
				}
				return item;
			})
		});
	};

	searchFunc = (search) => {
		const copy = this.state.instraData;

		let filtered = copy.filter((user) => search === user.username);

		if (search === '') {
			console.log('if', copy);
		} else {
			console.log('ese', filtered);
		}

		// if (search === '') {
		// 	// this.componentDidMount();
		// } else {
		// 	// this.componentDidMount();
		// 	this.setState({
		// 		instraData : copy.filter((user) => search === user.username)
		// 	});
		// }
	};

	render() {
		return (
			<div className="App">
				<SearchBar searchFunc={this.searchFunc} />

				{this.state.instraData.map((item) => (
					<PostContainer
						key={item.id}
						posts={item}
						addNewComment={this.addNewComment}
						addLike={this.addLike}
					/>
				))}
			</div>
		);
	}
}

export default PostsPage;
