import React from 'react';
import './PostsPage.css';

import dummyData from '../../dummy-data';

import SearchBar from '../SearchBar/SearchBar';
import PostContainer from './PostContainer';
// import Post from './Post';

import AppContainer from './PostsPageStyle';

class PostsPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			instraData : [],
			filtered   : []
		};
	}

	componentDidMount() {
		this.setState({
			instraData : dummyData,
			filtered   : dummyData
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
			filtered : this.state.filtered.map((item) => {
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

		if (search === '') {
			this.setState({
				filtered : dummyData
			});
		} else {
			this.setState({
				filtered : copy.filter((user) => search === user.username)
			});
			console.log(copy);
		}
	};

	render() {
		return (
			<AppContainer>
				<SearchBar searchFunc={this.searchFunc} />

				{this.state.filtered.map((item) => (
					<PostContainer
						data={this.postData}
						key={item.id}
						posts={item}
						addNewComment={this.addNewComment}
						addLike={this.addLike}
					/>
				))}
			</AppContainer>
		);
	}
}

export default PostsPage;
