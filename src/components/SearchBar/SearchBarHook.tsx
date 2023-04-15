import React, { ChangeEvent, KeyboardEvent, useEffect } from 'react';
import './SearchBar.css';
import { FcSearch } from 'react-icons/fc';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { setSearchText } from '../../features/searchTextSlice';
import {
  setCurrentPage,
  setSearchError,
  setSearchResults,
  setTotalPages,
} from '../../features/searchResultsSlice';
import { useGetSearchUnsplashQuery } from '../../services/unsplashApi';
import { DataCard } from '../../pages/Home/Home';

type ErrorType = {
  data: string;
  error: string;
  originalStatus: number;
  status: string;
};

type DataType = {
  results: DataCard[];
  total_pages: number;
};

type DataSearchType = {
  data: DataType;
  error: ErrorType;
};

function SearchBarHook() {
  const valueSearch = useAppSelector((state) => state.searchText.searchText);
  const dispatch = useAppDispatch();

  const currentPage = useAppSelector((state) => state.search.currentPage);
  const { data, error } = useGetSearchUnsplashQuery<DataSearchType>({
    valueSearch,
    page: currentPage,
  });

  useEffect(() => {
    if (error) {
      dispatch(setSearchError(error.status));
    } else if (data) {
      dispatch(setSearchResults(data.results));
    }
  }, [currentPage]);

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
    if (data.results.length) {
      dispatch(setSearchResults(data.results));
      dispatch(setTotalPages(data.total_pages));
      dispatch(setCurrentPage(0));
    } else {
      dispatch(setSearchError('No such data'));
      dispatch(setCurrentPage(0));
      dispatch(setTotalPages(0));
    }
  };

  return (
    <div className="search-block">
      <input
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
