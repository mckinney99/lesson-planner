import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchLessons } from '../actions/lessonActions';

class Lessons extends Component {
  componentWillMount() {
    this.props.fetchLessons();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.newLesson) {
      this.props.lessons.unshift(nextProps.newLesson);
    }
  }

  render() {
    const lessonItems = this.props.lessons.map(lesson => (
      <div key={lesson.id}>
        <h3>{lesson.title}</h3>
        <p>{lesson.body}</p>
      </div>
    ));
    return (
      <div>
        <h1>Lessons</h1>
        {lessonItems}
      </div>
    );
  }
}

Lessons.propTypes = {
  fetchLessons: PropTypes.func.isRequired,
  lessons: PropTypes.array.isRequired,
  newLesson: PropTypes.object
};

const mapStateToProps = state => ({
  lessons: state.lessons.items,
  newLesson: state.lessons.item
});

export default connect(mapStateToProps, { fetchLessons })(Lessons);
