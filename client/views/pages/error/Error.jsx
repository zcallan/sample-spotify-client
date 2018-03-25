import React from 'react';
import Layout from 'views/layout';
import { Link, Heading, Text } from 'views/components';


const Error = () => (
  <Layout title="404">
    <Heading>Authorization failed</Heading>

    <Text color="black">Failed to login via Spotify, please try again</Text>

    <Link to="/">Home</Link>
  </Layout>
);

export default Error;
