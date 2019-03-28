import React from 'react';
import './App.css';

// import dummyData from './dummy-data';

import PostsPage from './components/PostContainer/PostsPage';

import withAuthenticate from './components/authentication/withAuthenticate';

import Login from './components/Login/Login';

const ComponentFromWithAuthenticate = withAuthenticate(PostsPage)(Login);

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			instraData : []
		};
	}

	// componentDidMount() {
	// 	this.setState({
	// 		instraData : dummyData
	// 	});
	// }

	render() {
		return (
			<div className="preApp">
				{/* <Login /> */}
				{/* <PostsPage /> */}
				<ComponentFromWithAuthenticate />
			</div>
		);
	}
}

export default App;
