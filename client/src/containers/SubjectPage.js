import React, {Component} from 'react';
import { connect } from 'react-redux';
import '../index.css';
import {Form, FormControl, Nav, Navbar, NavDropdown, Col, Row, Container, Button, Card, CardDeck, CardColumns} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { getLessons, deleteLesson} from '../actions'
import Lessons from '../containers/Lessons'

class SubjectPage extends Component {
  render() {

    return (

      <Container className='lessons'>

        <h1>{this.props.match.params.subject[0].toUpperCase() + this.props.match.params.subject.slice(1)} Lessons</h1>

              <Row className='lesson-item'>
                    {this.props.lessons.map(lesson => (
                       <Col xs={4} >
                       <CardColumns>
                        <Card style={{ width: '18rem' }}>
                          <Card.Body>
                            <Card.Title><Link to={`/lessons/${lesson.id}`}>{lesson.title}</Link></Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">{lesson.description}</Card.Subtitle>
                            <Card.Text>
                              {lesson.body}
                            </Card.Text>
                            <Card.Text> By:   {lesson.source}</Card.Text>
                            <p>View more in grade <Card.Link> <Link to={`/grades/${lesson.grade}`}>{lesson.grade}</Link></Card.Link></p>
                          </Card.Body>
                        </Card>
                       </CardColumns>
                   </Col>
                ))}

              </Row>

        </Container>
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
