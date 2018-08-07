import React, { Component } from 'react';
import { connect } from 'react-redux';
import { lessonsFetchData } from '../actions/lessons';
import Lesson from './Lesson';

class Lessons extends Component {
  render() {

    const lessons = this.props.store.getState().lessons.map((lesson, index) => {
      return <Lesson name={lesson.name} key={index} /> /* code changed */
    });

    return(
      <ul>
        {lessons}
      </ul>
    );
  }
};

export default Lessons;
