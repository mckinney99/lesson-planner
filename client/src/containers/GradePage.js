import React, {Component} from 'react';
import '../index.css';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { getLessons} from '../actions'
import {Form, FormControl, Nav, Navbar, NavDropdown, Col, Row, Container, Button, Card, CardDeck, CardColumns} from 'react-bootstrap'

import Lessons from './Lessons';


class GradePage extends Component {
  render() {
    return (

      <Container className='lessons'>

        <h1>Grade {this.props.match.params.grade} Lessons</h1>

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


      // <div>
      //     <h1>Grade {this.props.grade}'s lessons</h1>
      //     <ul>
      //       {this.props.lessons.map(l => <li>{l.title}</li>)}
      //     </ul>
      // </div>
    )
  }
}

const mapStateToProps = function(state, props) {
  const grade = props.match.params.grade
  const filteredLessons = state.lessons.filter(l => l.grade == grade)
  return {
    lessons: filteredLessons,
    grade: grade
  }
}

export default connect(mapStateToProps, {getLessons})(GradePage)
