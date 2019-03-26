import React from 'react';
import './App.css';

import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			instraData : []
		};
	}

	componentDidMount() {
		this.setState({
			instraData : dummyData
		});
	}

	render() {
		return (
			<div className="App">
				<SearchBar />

				{this.state.instraData.map((item) => <PostContainer key={item.id} posts={item} />)}
			</div>
		);
	}
}

export default App;
