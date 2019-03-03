import React, {Component} from 'react';
import { connect } from 'react-redux';
import './index.css';

class EnglishPage extends Component {
  render() {
    return (
      <div>
        <h1>English Page</h1>
        <ul>
          {this.props.lessons.map(l => <li>{l.title}</li>)}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = function(state){
  const englishLessons = state.lessons.filter(l => l.subject == 'english')
  return {
    lessons: englishLessons
  }
}

export default connect(mapStateToProps)(EnglishPage)
