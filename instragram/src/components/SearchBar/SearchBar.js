import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
	render() {
		return (
			<div className="searchBar-container">
				<div className="logo">
					<i class="fab fa-instagram" />
					<h2>Instragram</h2>
				</div>
				<input placeholder="&#xf002;  Search" />
				<div className="icons">
					<i class="far fa-compass" />
					<i class="far fa-heart" />
					<i class="far fa-user" />
				</div>
			</div>
		);
	}
}

export default SearchBar;
