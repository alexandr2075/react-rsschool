import React, { ChangeEvent, KeyboardEvent } from 'react';
import './SearchBar.css';
import { FcSearch } from 'react-icons/fc';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { setSearchText } from '../../features/searchTextSlice';
import { setSearchError, setSearchResults } from '../../features/searchResultsSlice';
import { useGetSearchUnsplashQuery } from '../../services/unsplashApi';

function SearchBarHook() {
  const valueSearch = useAppSelector((state) => state.searchText.searchText);
  const dispatch = useAppDispatch();

  const { data } = useGetSearchUnsplashQuery(valueSearch);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchText(event.target.value));
    dispatch(setSearchError(''));
  };

  const onEnter = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      onSearch();
    }
  };

  const onSearch = () => {
    if (data) dispatch(setSearchResults(data.results));
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
