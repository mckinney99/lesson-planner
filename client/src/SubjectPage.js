import React, {Component} from 'react';
import { connect } from 'react-redux';
import './index.css';

class SubjectPage extends Component {
  render() {

    return (
      <div>
        <h1>{this.props.match.params.subject.charAt(0).toUpperCase() + this.props.match.params.subject.slice(1)} Page</h1>
        <ul>
          {this.props.lessons.map(l => <li>{l.title}</li>)}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = function(state, props){
  const subject = props.match.params.subject
  const lessons = state.lessons.filter(l => l.subject == subject)
  return {
    lessons: lessons
  }
}

export default connect(mapStateToProps)(SubjectPage)
//export default SubjectPage
