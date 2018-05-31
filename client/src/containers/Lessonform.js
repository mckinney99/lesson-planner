import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createLesson, removeLesson } from '../actions/lessonActions';

class LessonForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: ''
    };
  };

  handleSubmit(event) {
    event.preventDefault();
    this.props.store.dispatch({
      type: 'NEW_LESSON',
      lesson: this.state,
    });
  }

  render() {
    return(
      <div>
        <form onSubmit={(event) => this.handleSubmit(event)}>
    	    <p>
        	<label>Add Lesson: </label>
          <input
            name="title"
    	      type="text"
          />
          <input
            name="body"
      	    type="text"
          />
          </p>
          <input type="submit" />
       </form>
       {this.state.text}
     </div>
   );
  }
};

function mapDispatchToProps(dispatch) {
  return {
    removeLesson: (id) => {
      dispatch(removeLesson(id))
    },
  }
}


function mapStateToProps(state) {
  return {
    lessons: state.lessons
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LessonForm)
