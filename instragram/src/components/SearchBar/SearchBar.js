import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
	render() {
		return (
			<div className="searchBar-container">
				<h2>Instragram</h2>
				<input placeholder="Search" />
			</div>
		);
	}
}

export default SearchBar;
