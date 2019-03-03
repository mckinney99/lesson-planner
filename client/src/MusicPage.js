import React, {Component} from 'react';
import { connect } from 'react-redux';
import './index.css';

class MusicPage extends Component {
  render() {
    return (
      <div>
        <h1>Music Page</h1>
        <ul>
          {this.props.lessons.map(l => <li>{l.title}</li>)}
        </ul>
      </div>

    )
  }
}

const mapStateToProps = function(state){
  const musicLessons = state.lessons.filter(l => l.subject == 'music')
  return {
    lessons: musicLessons
  }
}

export default connect(mapStateToProps)(MusicPage)
