import React, { Component } from 'react';
import {
    Link
} from 'react-router-dom';
import NavBar from './navBar';
import ToggleButton from '../elements/toggleButton';

class Header extends Component {
  render() {
    return (
      <header>
          <ToggleButton />
      </header>
    );
  }
}

export default Header;
