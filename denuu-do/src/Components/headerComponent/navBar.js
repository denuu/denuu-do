import React, { Component } from 'react';
import {
    Link
} from 'react-router-dom';

class NavBar extends Component {
    constructor(props) {
        super();
    }
    render() {
        return (

              <nav>
                  <ul>
                      <li className="first">
                          <Link to="/">HOME</Link>
                      </li>
                      <li>
                          <Link to="/AboutPage">ABOUT</Link>
                      </li>
                      <li className="last">
                          <Link to="/ProjectsPage">PROJECTS</Link>
                      </li>
                  </ul>
              </nav>

        );
    }
}

export default NavBar;
