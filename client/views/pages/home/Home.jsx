import './home.scss';
import React from 'react';
import Layout from 'views/layout';
import { Button, Link, Heading } from 'views/components';
import config from 'config';


const Home = () => {
  const authorizationUrl = `https://accounts.spotify.com/authorize?client_id=${config.spotify.clientId}&redirect_uri=${encodeURI( 'http://localhost:3000/callback' )}&response_type=token`;

  return (
    <Layout title="Home">
      <Heading styleName="heading">Sample Spotify Client</Heading>

      <Link to={authorizationUrl} externalLink opensInSameTab>
        <Button color="red">Login</Button>
      </Link>
    </Layout>
  );
};

export default Home;
