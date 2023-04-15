import React from 'react';
import { Link } from 'react-router-dom';

export default class ErrorPage extends React.Component {
  render() {
    return (
      <div id="error-page">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <Link to="/">Go to the home page</Link>
      </div>
    );
  }
}
