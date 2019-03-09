import React, {Component} from 'react';
import './index.css';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { getLessons} from './actions'


class GradePage extends Component {
  render() {
    return (
      <div>
          <h1>Grade {this.props.grade}'s lessons</h1>
          <ul>
            {this.props.lessons.map(l => <li>{l.title}</li>)}
          </ul>
      </div>
    )
  }
}

const mapStateToProps = function(state, props) {
  const grade = props.match.params.grade
  const filteredLessons = state.lessons.filter(l => l.grade == grade)
  return {
    lessons: filteredLessons,
    grade: grade
  }
}

export default connect(mapStateToProps)(GradePage)
