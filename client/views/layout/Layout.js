import React from 'react';
import { any } from 'prop-types';


const Layout = ({ children }) => (
  <div>
    {children}
  </div>
);

Layout.propTypes = {
  children: any,
};

export default Layout;
