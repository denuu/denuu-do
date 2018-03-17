import React, { Component } from 'react';
import {
    Link
} from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <header>

          <div className="logo">
              <h1>denuu</h1>
          </div>

          <nav>
              <ul>
                  <li className="first">
                      <Link to="/">Home</Link>
                  </li>
                  <li>
                      <Link to="/AboutPage">About</Link>
                  </li>
                  <li className="last">
                      <Link to="/ProjectsPage">Projects</Link>
                  </li>
              </ul>
          </nav>

      </header>
    );
  }
}

export default Header;
