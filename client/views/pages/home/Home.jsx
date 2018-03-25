import './home.scss';
import React from 'react';
import Layout from 'views/layout';
import { Button, Link } from 'views/components';


const Home = () => (
  <Layout title="Home">
    <h1 styleName="heading">Sample Spotify Client</h1>

    <Link to="/test" disabled>
      <Button color="red" disabled>Test</Button>
    </Link>
  </Layout>
);

export default Home;
