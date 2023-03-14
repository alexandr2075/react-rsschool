import React, { Component } from 'react';
import './SearchBar.css';

class SearchBar extends Component {
  render() {
    return (
      <div className="search-block">
        <input type="text" className="search" />
        <button className="search-btn">search</button>
      </div>
    );
  }
}

export default SearchBar;
