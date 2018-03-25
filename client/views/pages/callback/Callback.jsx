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
    const { location, history } = this.props;
    const fragments = splitHashFragments( location.hash );

    if ( fragments.error ) {
      this.props.userAuthFail( fragments );

      history.go( '/' );
    }
    else {
      this.props.userAuthSuccess( fragments );

      history.go( '/error' );
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
