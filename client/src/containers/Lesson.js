import React, { Component } from 'react';

class Lesson extends Component {
  render() {
  return (
    <div>
      <h2>{this.props.lesson.title}</h2>
      <p>{this.props.lesson.body}</p>
    </div>
  );
 }
}
export default Lesson;
