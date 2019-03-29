import React from 'react';
import './SearchBar.css';

import { SearchBarContainer, Logo, H2, Input, Button, Icons } from './SearchBarStyle';

class SearchBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			search : ''
		};
	}

	logout = (e) => {
		localStorage.clear();
		console.log('clicked');
		window.location.reload();
	};

	handleChanges = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	submitSearch = (e) => {
		e.preventDefault();
		// take the item off of state
		// send that item to a function defined on App.js
		this.props.searchFunc(this.state.search);
		// reset the state
		this.setState({ search: '' });
	};

	render() {
		return (
			<SearchBarContainer>
				<Logo>
					<i className="fab fa-instagram" />
					<H2>Instragram</H2>
				</Logo>

				<form onSubmit={this.submitSearch}>
					<Input
						type="text"
						placeholder="Search"
						value={this.state.search}
						name="search"
						onChange={this.handleChanges}
					/>
					<Button>
						<i className="fas fa-search" />
					</Button>
				</form>

				<Icons>
					<i className="far fa-compass" />
					<i className="far fa-heart" />
					<i className="far fa-user" onClick={this.logout} />
				</Icons>
			</SearchBarContainer>
		);
	}
}

export default SearchBar;
