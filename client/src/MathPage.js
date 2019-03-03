import React, {Component} from 'react';
import { connect } from 'react-redux';
import './index.css';

class MathPage extends Component {
  render() {
    return (
      <div>
        <h1>Math Page</h1>
        <ul>
          {this.props.lessons.map(l => <li>{l.title}</li>)}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = function(state){
  const mathLessons = state.lessons.filter(l => l.subject == 'math')
  return {
    lessons: mathLessons
  }
}

export default connect(mapStateToProps)(MathPage)
