import React, { Component } from 'react';
import { Link, Outlet } from 'react-router-dom';
import SearchBar from './SearchBar/SearchBar';

class Layout extends Component {
  render() {
    return (
      <>
        <aside
          style={{ paddingTop: 20, marginRight: '10px', background: '#b6f542', height: '100vh' }}
        >
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
        <div className="outlet" style={{ width: '100%', overflowY: 'scroll' }}>
          <Outlet />
        </div>
      </>
    );
  }
}

export default Layout;
