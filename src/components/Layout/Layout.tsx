import React, { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import SearchBarHook from '../SearchBar/SearchBarHook';
import { ACCESS_KEY } from '../../../constants';
import { UrlsType } from '../Card/Card';

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

  useEffect(() => {
    fetch(`https://api.unsplash.com/photos/?client_id=${ACCESS_KEY}`)
      .then((response) => response.json())
      .then((data) => {
        setCards(data);
      });
    setIsLoading(false);
  }, []);

  return (
    <>
      <aside style={{ paddingTop: 20, marginRight: '10px', background: '#b6f542' }}>
        <SearchBarHook setCards={setCards} />
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
        <Outlet context={{ cards: cards, isLoading: isLoading }} />
      </div>
    </>
  );
}

export default Layout;
