import React, {Component} from 'react';
import { connect } from 'react-redux';
import './index.css';

class HistoryPage extends Component {
  render() {
    return (
      <div>
        <h1>History Page</h1>
        <ul>
          {this.props.lessons.map(l => <li>{l.title}</li>)}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = function(state){
  const historyLessons = state.lessons.filter(l => l.subject == 'history')
  return {
    lessons: historyLessons
  }
}

export default connect(mapStateToProps)(HistoryPage)
