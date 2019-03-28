import React from 'react';
import './Login.css';

import { LoginContainer, LoginBox, Form } from './LoginStyle';

class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username : '',
			password : ''
		};
	}

	handleChanges = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	login = (e) => {
		console.log('login');
		localStorage.setItem(this.state.username, this.state.password);
	};

	render() {
		return (
			<LoginContainer>
				<LoginBox>
					<Form onSubmit={this.login}>
						<input
							type="text"
							placeholder="Username"
							value={this.state.username}
							name="username"
							onChange={this.handleChanges}
						/>

						<input
							type="text"
							placeholder="Password"
							value={this.state.password}
							name="password"
							onChange={this.handleChanges}
						/>

						<button>Login</button>
					</Form>
				</LoginBox>
			</LoginContainer>
		);
	}
}

export default Login;
