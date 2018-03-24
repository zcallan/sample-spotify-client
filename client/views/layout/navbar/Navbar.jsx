import './navbar.scss';
import React from 'react';
import NavbarItem from './item';


const Navbar = () => (
  <nav styleName="navbar">
    <div>
      <h2>Sample Spotify Client</h2>
    </div>

    <ul>
      <NavbarItem text="Login" />
    </ul>
  </nav>
);

export default Navbar;
