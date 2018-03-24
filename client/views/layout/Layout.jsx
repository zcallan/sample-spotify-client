import React from 'react';
import { any, string } from 'prop-types';
import Helmet from 'react-helmet';
import Navbar from './navbar';
import config from 'config';


const Layout = ({ children, title, description }) => (
  <div>
    <Helmet>
      <title>{title ? `${title} | ${config.app.name}` : config.app.name}</title>

      {description && <meta content="description">{description}</meta>}
    </Helmet>

    <Navbar />

    <main>
      {children}
    </main>
  </div>
);

Layout.propTypes = {
  children: any,
  title: string,
  description: string,
};

export default Layout;
