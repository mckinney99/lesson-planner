import React, {Component} from 'react';
import { connect } from 'react-redux';
import './index.css';

class SciencePage extends Component {
  render() {
    return (
      <div>
        <h1>Science Page</h1>
        <ul>
          {this.props.lessons.map(l => <li>{l.title}</li>)}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = function(state){
  const scienceLessons = state.lessons.filter(l => l.subject == 'science')
  return {
    lessons: scienceLessons
  }
}

export default connect(mapStateToProps)(SciencePage)
