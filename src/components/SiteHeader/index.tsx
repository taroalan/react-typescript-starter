import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class SiteHeader extends Component {
  render() {
    return (
      <div className="site-header">
        <Link to="/">Home</Link>
        <br />
        <Link to="/nestroutes">NestRoutes</Link>
        <br />
        <Link to="/about">About</Link>
      </div>
    );
  }
}
