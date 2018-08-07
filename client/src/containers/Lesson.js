import React, { Component } from 'react';

class Lesson extends Component {
  render() {
  return (
    <li>{this.props.name}</li>
  );
 }
}
export default Lesson;
