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
					// console.log(typeof item.comments);
					item.comments.push(newComment);
				}
				return { ...item };
			})
		});
	};

	render() {
		return (
			<div className="App">
				<SearchBar />
				{/* {console.log(this.state.instraData)} */}
				{this.state.instraData.map((item) => (
					<PostContainer key={item.id} posts={item} addNewComment={this.addNewComment} />
				))}
			</div>
		);
	}
}

export default App;
