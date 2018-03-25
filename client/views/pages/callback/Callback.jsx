import React, { Component } from 'react';
import { func, object } from 'prop-types';
import { splitHashFragments } from 'utils';
import Layout from 'views/layout';
import { Heading } from 'views/components';


class Callback extends Component {
  static propTypes = {
    userAuthFail: func,
    userAuthSuccess: func,
    location: object,
    history: object,
  }

  componentDidMount() {
    const { hash } = this.props.location;

    if ( hash )
      this.scanForLocationHashFragments();
  }

  scanForLocationHashFragments() {
    const { location, history } = this.props;

    const fragments = splitHashFragments( location.hash );

    if ( fragments.error ) {
      this.props.userAuthFail( fragments );

      history.replace( '/error' );
    }
    else if ( fragments.access_token ) {
      this.props.userAuthSuccess( fragments );

      history.replace( '/dashboard' );
    }
  }

  render() {
    return (
      <Layout>
        <Heading>Authenticating...</Heading>
      </Layout>
    );
  }
}

export default Callback;
