import './home.scss';
import React from 'react';
import Layout from 'views/layout';
import { Button, Link, Heading } from 'views/components';


const Home = () => (
  <Layout title="Home">
    <Heading styleName="heading">Sample Spotify Client</Heading>

    <Link to="/test" disabled>
      <Button color="red" disabled>Test</Button>
    </Link>
  </Layout>
);

export default Home;
