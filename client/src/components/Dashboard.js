import React, { Component } from 'react';
import { Container, Segment } from 'semantic-ui-react';
// import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';

import Navbar from './layout/Navbar';

class Dashboard extends Component {
  render () {
    return <Container>
      <Navbar/>
      <Segment>
        <h1>This is the home page.</h1>
      </Segment>

      </Container>

  }
}

export default Dashboard
