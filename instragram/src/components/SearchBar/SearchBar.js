import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
	render() {
		return (
			<div className="searchBar-container">
				<div className="logo">
					<i className="fab fa-instagram" />
					<h2>Instragram</h2>
				</div>

				<input placeholder="&#xf002; Search" />
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
