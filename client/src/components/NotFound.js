import React, { Component } from 'react';
import { Container, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import Navbar from './layout/Navbar';

class NotFound extends Component {
  render () {
    return <Container text textAlign='center'>
      <Segment>
        <Navbar/>
        <h1>404: Not found</h1>
        <Link to="/">Home</Link>
      </Segment>
    </Container>
  }
}

export default NotFound
