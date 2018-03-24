import React from 'react';
import { any } from 'prop-types';
import Navbar from './navbar';


const Layout = ({ children }) => (
  <div>
    <Navbar />

    <main>
      {children}
    </main>
  </div>
);

Layout.propTypes = {
  children: any,
};

export default Layout;
