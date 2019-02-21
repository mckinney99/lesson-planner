import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import './index.css';
import { getLessons } from './actions'


const homeRoute = "/"

class LessonShow extends React.Component {

  state = {
    lessons: []
  }

  render( ) {
    if (this.props.lesson === undefined) {
      return <h1>Loading....</h1>
    }
    return (
      <div>
        <h1>Lesson Show</h1>

         <Link to={homeRoute}>Home</Link>
         <h1>{this.props.lesson.title}</h1>

      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {

    const lessonId = parseInt(ownProps.match.params.id, 10);
    // const lesson = state.lessons[lessonId] - what you had before
    const lesson = state.lessons.find((lessonObject) => lessonObject.id === lessonId)
    // const lesson = state.lessons.find(function(lessonObject) {
    //   return lessonObject.id === lessonId
    // })
    //console.log(lesson)
    return {
        lesson
    };
}


export default connect(mapStateToProps, {getLessons})(LessonShow)



// Action to deliete a lesson
// Case in the reducer to handle the deletion
// Add a button next to each title to delete a lesson

// src/components/DogsList.js

// export default function DogsList(props){
//  return (
//    <ul>
//      {props.dogs.map(dog => <li>{dog.name}</li>)}
//    </ul>
//  )
//}

// src/components/DogsPage.js
// import DogsList from './DogsList'
// function DogsPage(props){
//  return (<DogsList dogs={props.dogs}/>)

//}
// function mapStateToProps(state, ownProps){
//  return {
//    dogs: state.dogs
//  }
//}

//export default  connect(mapStateToProps)(DogsList)
