import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import '../index.css';
import { getLessons } from '../actions'

const homeRoute = "/"

class LessonShow extends React.Component {

  state = {
    lessons: []
  }

  render( ) {
    if (this.props.lesson === undefined) {
      return <h1>Loading....</h1>
    }
    return (
      <div>
        <h1>Lesson Show</h1>
         <Link to={homeRoute}>Home</Link>
         <h1>{this.props.lesson.title}</h1>

      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {

    const lessonId = parseInt(ownProps.match.params.id, 10);
    const lesson = state.lessons.find((lessonObject) => lessonObject.id === lessonId)
    return {
        lesson
    };
}

export default connect(mapStateToProps, {getLessons})(LessonShow)
