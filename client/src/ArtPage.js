import React, {Component} from 'react';
import { connect } from 'react-redux';
import './index.css';

class ArtPage extends Component {
  render() {
    return (
      <div>
        <h1>Art Page</h1>
        <ul>
          {this.props.lessons.map(l => <li>{l.title}</li>)}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = function(state){
  const artLessons = state.lessons.filter(l => l.subject == 'art')
  return {
    lessons: artLessons
  }
}

export default connect(mapStateToProps)(ArtPage)
