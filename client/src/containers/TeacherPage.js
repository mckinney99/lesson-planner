import React, {Component} from 'react';
import '../index.css';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import {Form, FormControl, Nav, Navbar, NavDropdown, Col, Row, Container, Button, Card, CardDeck, CardColumns} from 'react-bootstrap'

import { getLessons } from '../actions'


class TeacherPage extends Component {
  render() {
    return (

      <Container className='lessons'>

        <h1>{this.props.match.params.teacher[0].toUpperCase() + this.props.match.params.teacher.slice(1)}'s Lessons</h1>

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
      //   <div className="front-page-text">
      //     <h1>{this.props.source}</h1>
      //     <ul>
      //       {this.props.lessons.map(l => <li>{l.title}</li>)}
      //     </ul>
      //     <Row className='lesson-item'>
      //           {this.props.lessons.map(lesson => (
      //              <Col xs={4} >
      //              <CardColumns>
      //               <Card style={{ width: '18rem' }}>
      //                 <Card.Body>
      //                   <Card.Title><Link to={`/lessons/${lesson.id}`}>{lesson.title}</Link></Card.Title>
      //                   <Card.Subtitle className="mb-2 text-muted">{lesson.description}</Card.Subtitle>
      //                   <Card.Text>
      //                     {lesson.body}
      //                   </Card.Text>
      //                   <Card.Link> <Link to={`teachers/${lesson.source}`}>{lesson.source}</Link></Card.Link>
      //                   <Card.Link href="#">Another Link</Card.Link>
      //                 </Card.Body>
      //               </Card>
      //              </CardColumns>
      //          </Col>
      //       ))}
      //
      //     </Row>
      //   </div>
      // </div>
    )
  }
}

const mapStateToProps = function(state, props) {
  // debugger
  const source = props.match.params.teacher
  const filteredLessons = state.lessons.filter(l => l.source == source)
  return {
    lessons: filteredLessons,
    source: source
  }
}

export default connect(mapStateToProps)(TeacherPage)
