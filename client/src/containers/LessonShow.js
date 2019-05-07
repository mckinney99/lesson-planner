import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import {Col, Row, Container, Button, Card, CardDeck, CardColumns} from 'react-bootstrap'

import '../index.css';
import { getLessons } from '../actions'

const homeRoute = "/"

function LessonShow(props){
    if (props.lesson === undefined) {
      return <h1>Loading.... </h1>
    }
    return (


      <Container class="lesson-show">
        <h1>{props.lesson.title}</h1>

              <Row className='lesson-item'>

                       <Col lg={12} >
                       <CardColumns>
                        <Card>
                          <Card.Body>
                            <Card.Title><Link to={`/lessons/${props.lesson.id}`}>{props.lesson.title}</Link></Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">{props.lesson.description}</Card.Subtitle>
                            <Card.Text>
                              {props.lesson.body}
                            </Card.Text>
                            <Card.Text> By:   {props.lesson.source}</Card.Text>
                            <p>View more in grade <Card.Link> <Link to={`/grades/${props.lesson.grade}`}>{props.lesson.grade}</Link></Card.Link></p>
                          </Card.Body>
                        </Card>
                       </CardColumns>
                   </Col>


              </Row>
      </Container>
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
