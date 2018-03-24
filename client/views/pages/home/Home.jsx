import './home.scss';
import React from 'react';
import Layout from 'views/layout';
import { Button } from 'views/components';


const Home = () => (
  <Layout title="Home">
    <h1 styleName="heading">Sample Spotify Client</h1>

    <Button color="red" disabled>Test</Button>
  </Layout>
);

export default Home;
