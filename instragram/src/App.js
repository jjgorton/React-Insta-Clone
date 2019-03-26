import React from 'react';
import './App.css';

import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			dummyData
		};
	}
	render() {
		return (
			<div className="App">
				<SearchBar />

				{this.state.dummyData.map((item) => <PostContainer key={item.id} posts={item} />)}
			</div>
		);
	}
}

export default App;
