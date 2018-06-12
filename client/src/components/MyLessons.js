import React, { Component } from 'react';
import { Container, Segment } from 'semantic-ui-react';
// import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import { fetchLessons } from '../actions/lessons';
// import LessonList from '../containers/Lessons';

import Navbar from './layout/Navbar';
import Lessons from '../containers/Lessons';
import LessonForm from '../containers/LessonForm';

class MyLessons extends Component {
  render () {
    return <Container>

      <Navbar/>
      <Segment>
        <LessonForm />
        <Lessons />

      <h1>This is the lesson page.</h1>
    </Segment>

    </Container>
  }
}

export default MyLessons
