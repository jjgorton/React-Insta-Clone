import React from 'react';

const withAuthenticate = (App) => (Login) =>
	class extends React.Component {
		constructor() {
			super();
			this.state = {
				loggedIn : false
			};
		}

		componentDidMount() {
			if (localStorage.length > 0) {
				this.setState({
					loggedIn : true
				});
			} else {
				this.setState({
					loggedIn : false
				});
			}
		}

		render() {
			if (this.state.loggedIn) {
				return <App />;
			} else {
				return <Login />;
			}
		}
	};

export default withAuthenticate;
