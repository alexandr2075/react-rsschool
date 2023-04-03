import React, { ChangeEvent, KeyboardEvent, useEffect, useState } from 'react';
import './SearchBar.css';
import { DataType } from '../Layout/Layout';
import { FcSearch } from 'react-icons/fc';

type SearchPropsType = {
  setCards: React.Dispatch<React.SetStateAction<DataType[]>>;
};

function SearchBarHook(props: SearchPropsType) {
  const [valueSearch, setValueSearch] = useState('');

  useEffect(() => {
    const inputValue = localStorage.getItem('inputValue');
    if (inputValue) setValueSearch(inputValue);
    return () => localStorage.setItem('inputValue', valueSearch);
  }, []);

  useEffect(() => {
    localStorage.setItem('inputValue', valueSearch);
  }, [valueSearch]);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValueSearch(event.target.value);
  };

  const onEnter = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      onSearch();
    }
  };

  const onSearch = () => {
    fetch(`https://api.unsplash.com/search/photos?query=${valueSearch}&per_page=30&page=3`, {
      headers: {
        Authorization: 'Client-ID T_WBzHCyEvDlZ2IItceILiDVrwuhwTVDEg0Oh3QV6ic',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        props.setCards(data.results);
      });
  };

  return (
    <div className="search-block">
      <input
        type="text"
        className="search"
        value={valueSearch}
        onChange={onChange}
        onKeyDown={onEnter}
        autoFocus={true}
      />
      <button className="search-btn" onClick={onSearch}>
        <FcSearch size="20px" />
      </button>
    </div>
  );
}

export default SearchBarHook;
