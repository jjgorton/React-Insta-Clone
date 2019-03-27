import React from 'react';
import './App.css';

import PostsPage from './components/PostContainer/PostsPage';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			instraData : []
		};
	}

	render() {
		return (
			<div className="preApp">
				<PostsPage />
			</div>
		);
	}
}

export default App;
