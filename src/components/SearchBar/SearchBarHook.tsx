import React, { useEffect, useState } from 'react';
import './SearchBar.css';

function SearchBarHook() {
  const [valueSearch, setValueSearch] = useState('');

  useEffect(() => {
    const inputValue = localStorage.getItem('inputValue');
    if (inputValue) setValueSearch(inputValue);
    return () => localStorage.setItem('inputValue', valueSearch);
  }, []);

  useEffect(() => {
    localStorage.setItem('inputValue', valueSearch);
  }, [valueSearch]);

  return (
    <div className="search-block">
      <input
        type="text"
        className="search"
        value={valueSearch}
        onChange={(e) => setValueSearch(e.target.value)}
        autoFocus={true}
      />
      <button className="search-btn">search</button>
    </div>
  );
}

export default SearchBarHook;
