import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import ErrorPage from './pages/404';
import Layout from './components/Layout';
import AboutUs from './pages/AboutUs';
import Home from './pages/Home/Home';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<AboutUs />} />
          </Route>
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    );
  }
}

export default App;
