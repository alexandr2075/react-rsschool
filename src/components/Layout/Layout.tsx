import React, { useEffect, useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import SearchBarHook from '../SearchBar/SearchBarHook';
import { ACCESS_KEY } from '../../../constants';
import { UrlsType } from '../Card/Card';
import { Header } from '../Header/Header';

export type DataType = {
  id?: string;
  alt_description: string;
  created_at?: string;
  likes?: number;
  urls: UrlsType;
};
function Layout() {
  const [cards, setCards] = useState<DataType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const currentPage = useLocation();
  const [errorData, setErrorData] = useState('');

  useEffect(() => {
    fetch(`https://api.unsplash.com/photos/?client_id=${ACCESS_KEY}&per_page=30`)
      .then((response) => response.json())
      .then((data) => {
        setCards(data);
      })
      .catch((error) => {
        console.log(error.message);
      });
    setIsLoading(false);
  }, []);

  return (
    <>
      <aside
        style={{
          height: '100vh',
          position: 'sticky',
          top: 0,
          padding: '20px 10px',
          marginRight: '10px',
          background: '#b6f542',
          boxSizing: 'border-box',
        }}
      >
        <SearchBarHook setCards={setCards} setErrorData={setErrorData} />
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/form">Form</Link>
            </li>
          </ul>
        </nav>
      </aside>
      <div className="outlet" style={{ width: '100%' }}>
        <Header title={currentPage.pathname} />
        <Outlet context={{ cards: cards, isLoading: isLoading, error: errorData }} />
      </div>
    </>
  );
}

export default Layout;
