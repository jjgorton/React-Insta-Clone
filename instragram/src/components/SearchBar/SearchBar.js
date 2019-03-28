import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			search : ''
		};
	}

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
			<div className="searchBar-container">
				<div className="logo">
					<i className="fab fa-instagram" />
					<h2>Instragram</h2>
				</div>

				<form onSubmit={this.submitSearch}>
					<input
						type="text"
						placeholder="Search"
						value={this.state.search}
						name="search"
						onChange={this.handleChanges}
					/>
					<button>
						<i className="fas fa-search" />
					</button>
				</form>

				<div className="icons">
					<i className="far fa-compass" />
					<i className="far fa-heart" />
					<i className="far fa-user" />
				</div>
			</div>
		);
	}
}

export default SearchBar;
