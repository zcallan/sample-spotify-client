import React, { Component } from 'react';
import { object } from 'prop-types';
import { Redirect } from 'react-router-dom';
import Layout from 'views/layout';
import { Heading } from 'views/components';


class Dashboard extends Component {
  static propTypes = {
    user: object,
  }

  render() {
    const { authenticated } = this.props.user;

    if ( !authenticated )
      return <Redirect to="/" />;

    return (
      <Layout>
        <Heading>Dashboard</Heading>

      </Layout>
    );
  }
}

export default Dashboard;
