import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import SearchBarHook from '../SearchBar/SearchBarHook';

function Layout() {
  return (
    <>
      <aside style={{ paddingTop: 20, marginRight: '10px', background: '#b6f542' }}>
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
        <Outlet />
      </div>
    </>
  );
}

export default Layout;
