import React from 'react';
import './App.css';

import PostsPage from './components/PostContainer/PostsPage';

import withAuthenticate from './components/authentication/withAuthenticate';

const ComponentFromWithAuthenticate = withAuthenticate(PostsPage);

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
				<ComponentFromWithAuthenticate />
			</div>
		);
	}
}

export default App;
