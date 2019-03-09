import React, {Component} from 'react';
import { connect } from 'react-redux';
import './index.css';
import {Form, FormControl, Nav, Navbar, NavDropdown, Col, Row, Container, Button, Card, CardDeck, CardColumns} from 'react-bootstrap'

import { Link } from 'react-router-dom'
import { getLessons, deleteLesson} from './actions'

const apiLink = "http://localhost:3001";

class Lessons extends Component {
  state = {
    lessons: [],
    lessonTitle: '',
    lessonDescription: '',
    lessonBody: '',
    lessonSource: '',
    lessonGrade: '',
    lessonSubject: '',
    lessonGrade: '',
    lessonSource: ''
  }

  handleDelete = (id) => {
    this.props.deleteLesson(id)
  }

  render() {
    return (
      // <div>

      <Container className='lessons'>

              <Row className='lesson-item'
                // style={{display: 'grid', gridTemplateColumns: 'auto auto '}}
                >
                    {this.props.lessons.map(lesson => (
                      // <div>
                      //   <p>Lesson Title: <Link to={`/lessons/${lesson.id}`}>{lesson.title}</Link></p>
                      //   <p>Lesson Description:  -  {lesson.description}</p>
                      //   <p>From: <Link to={`/teacher/${lesson.source}`}>{lesson.source}</Link></p>
                      //   <p>Subject: <Link to={`/lessons/${lesson.subject}`}>{lesson.subject}</Link></p>
                      //   <p>Grade: <Link to={`/grades/${lesson.grade}`}>{lesson.grade}</Link></p>
                      //   <Button
                      //     onClick={()=>this.handleDelete(lesson.id)}>x</Button>
                      // </div>)

                    // <div>
                       <Col xs={4} >
                       <CardColumns>
                        <Card style={{ width: '18rem' }}>
                          <Card.Body>
                            <Card.Title><Link to={`/lessons/${lesson.id}`}>{lesson.title}</Link></Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">{lesson.description}</Card.Subtitle>
                            <Card.Text>
                              {lesson.body}
                            </Card.Text>
                            <Card.Link> <Link to={`teachers/${lesson.source}`}>{lesson.source}</Link></Card.Link>
                            <Card.Link href="#">Another Link</Card.Link>
                          </Card.Body>
                        </Card>
                       </CardColumns>
                   </Col>
                  // </div>)
                ))}

              </Row>

        </Container>
    // </div>
    )
  }
}

const mapStateToProps = function(state){
  return {
    lessons: state.lessons
  }
}

export default connect(mapStateToProps, {getLessons})(Lessons)
