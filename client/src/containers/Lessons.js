import React, { Component } from 'react';
import { connect } from 'react-redux';
import { lessonsFetchData } from '../actions/lessons';
import Lesson from './Lesson';

class LessonList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      default: true
    }
  }

  componentDidMount() {
    this.props.fetchData('http://localhost:3001/api/lessons.json');
  }

  render() {
    if (this.props.hasErrored) {
      return <p>Sorry! There was an error loading the items</p>;
    }

    if (this.props.isLoading) {
      return <p>Loading…</p>;
    }

    return (
      <div>
        {this.props.lessons.map((lesson) => <Lesson key={lesson.id} lesson={lesson} />)}
				<br />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
  	lessons: state.lessons,
    hasErrored: state.lessonsHasErrored,
    isLoading: state.lessonIsLoading,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchData: (url) => dispatch(lessonsFetchData(url))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LessonList);
