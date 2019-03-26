import React, {Component} from 'react';
import { connect } from 'react-redux';
import '../index.css';
import {Form, FormControl, Nav, Navbar, NavDropdown, Col, Row, Container, Button, Card, CardDeck, CardColumns} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { getLessons, deleteLesson} from '../actions'

const apiLink = "http://localhost:3001";

class Lessons extends Component {

  handleDelete = (id) => {
    this.props.deleteLesson(id)
  }

  render() {
    return (

      <Container className='lessons'>

        <h1>Browse All Lessons</h1>

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
                             <Card.Text onClick={() => this.handleDelete(lesson.id)}><Link to='/lessons'>X</Link></Card.Text>
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

const mapStateToProps = function(state){
  return {
    lessons: state.lessons
  }
}

export default connect(mapStateToProps, {getLessons, deleteLesson})(Lessons)
