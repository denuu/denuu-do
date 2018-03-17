import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header>

          <div className="logo">
              LOGO
          </div>

          <nav>
              <ul>
                  <li className="first">
                      <a href="#">Home</a>
                  </li>
                  <li>
                      <a href="#">About</a>
                  </li>
                  <li className="last">
                      <a href="#">Projects</a>
                  </li>
              </ul>
          </nav>

      </header>
    );
  }
}

export default Header;
