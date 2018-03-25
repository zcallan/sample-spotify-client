import React from 'react';
import Layout from 'views/layout';
import { Link, Heading } from 'views/components';


const NotFound = () => (
  <Layout title="404">
    <Heading>Page not found</Heading>

    <Link to="/">Home</Link>
  </Layout>
);

export default NotFound;
