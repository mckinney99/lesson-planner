import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import '../index.css';
import { getLessons } from '../actions'

const homeRoute = "/"

function LessonShow(props){
    if (props.lesson === undefined) {
      return <h1>Loading....</h1>
    }
    return (
      <div>
        <h1>Lesson Show</h1>
         <Link to={homeRoute}>Home</Link>
         <h1>{props.lesson.title}</h1>
         <h1>{props.lessons}</h1>
         <button onClick={() => {
           console.log("A")
           fetch("http://localhost:3001/api/lessons")
            .then(res => {
              console.log("B")
              return res.json()
            }).then( data => {
              console.log("C")
            })
            console.log("D")
         }}>Click Me</button>
      </div>
)}

// class LessonShow extends React.Component {
//   render( ) {
//     return (
//       <div>
//         <h1>Lesson Show</h1>
//          <Link to={homeRoute}>Home</Link>
//          <h1>{this.props.lesson.title}</h1>
//          <h1>{this.props.lessons}</h1>
//
//       </div>
//
//     )
//   }
// }

function mapStateToProps(state, ownProps) {
    const lessonId = parseInt(ownProps.match.params.id, 10);
    const lesson = state.lessons.find((lessonObject) => lessonObject.id === lessonId)
    return {
        lesson
    };
}

export default connect(mapStateToProps, {getLessons})(LessonShow)
