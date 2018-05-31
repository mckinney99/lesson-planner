import React, { Component } from 'react';
import { Container, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import LessonForm from '../containers/Lessonform';
import Navbar from './layout/Navbar';

class MyLessons extends Component {
  render () {
    return <Container>

      <Navbar/>
      <Segment>

          <LessonForm/>
        
      <h1>This is the users lesson show page.</h1>
    </Segment>

    </Container>
  }
}

export default MyLessons
