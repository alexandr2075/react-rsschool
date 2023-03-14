import React, { Component } from 'react';
import { Link, Outlet } from 'react-router-dom';
import SearchBar from './searchBar/SearchBar';

class Layout extends Component {
  render() {
    return (
      <>
        <aside>
          <SearchBar />
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </nav>
        </aside>
        <div className="outlet" style={{ padding: 20 }}>
          <Outlet />
        </div>
      </>
    );
  }
}

export default Layout;
