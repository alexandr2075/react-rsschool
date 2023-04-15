import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import SearchBarHook from '../SearchBar/SearchBarHook';
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
  const currentPage = useLocation();

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
        <SearchBarHook />
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
        <Outlet />
      </div>
    </>
  );
}

export default Layout;
