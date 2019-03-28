import React from 'react';
import './PostsPage.css';

import dummyData from '../../dummy-data';

import SearchBar from '../SearchBar/SearchBar';
import PostContainer from './PostContainer';
// import Post from './Post';

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
			username : localStorage.key(0),
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
		this.setState({
			instraData : dummyData
		});

		const copy = this.state.instraData;

		// let postData = copy;
		let filtered = copy.filter((user) => search === user.username);

		// if (search === '') {
		// 	console.log('if', copy);
		// 	this.setState({
		// 		instraData : copy
		// 	});
		// } else {
		// 	console.log('ese', filtered);
		// 	this.setState({
		// 		instraData : filtered
		// 	});
		// }

		if (search === '') {
			this.setState({
				instraData : dummyData
			});
		} else {
			this.setState({
				instraData : copy.filter((user) => search === user.username)
			});
			console.log(copy);
		}
	};

	render() {
		return (
			<div className="App">
				<SearchBar searchFunc={this.searchFunc} />

				{/* <Post data={this.searchFunc()} /> */}

				{this.state.instraData.map((item) => (
					<PostContainer
						data={this.postData}
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
