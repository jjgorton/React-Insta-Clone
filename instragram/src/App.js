import React from 'react';
import './App.css';

import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';

class App extends React.Component {
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
		// console.log(this.state.instraData);
	}

	addNewComment = (e, index) => {
		// e.preventDefault();

		// const copy = this.state.instraData.slice();
		const newComment = {
			id       : 'new',
			username : 'joshCodes',
			text     : e
		};

		// const selectPost = this.state.instraData.filter((post) => index === post.id);

		// console.log(selectPost.id);

		// selectPost.comments.push(newComment);

		// const copy = this.state.instraData.map((item) => {
		// 	if (item.id === index) {
		// 		item.comments.push(newComment);
		// 	}
		// 	return item;
		// });

		// console.log(copy);

		// this.setState({
		// 	instraData :
		// });

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
						// task: item.task,
						// id: item.id,
						// completed: item.completed
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
			this.componentDidMount();
		} else {
			this.setState({
				instraData : copy.filter((user) => search === user.username)
			});
		}
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

export default App;
