import React, {Component} from 'react';
import { connect } from 'react-redux';
import './index.css';
import {Form, FormControl, Nav, Navbar, NavDropdown, Col, Row, Container, Button} from 'react-bootstrap'

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
    lessonGrade: ''
  }

  handleDelete = (id) => {
    this.props.deleteLesson(id)
  }

  render() {
    return (
      <div>

      <div className='lessons'>
        <Row>
          <Col md={12}>
              <div className='header'>
                    {this.props.lessons.map(lesson => (
                      <div>
                        <p>Lesson Title: <Link to={`/lessons/${lesson.id}`}>{lesson.title}</Link></p>
                        <Button
                          onClick={()=>this.handleDelete(lesson.id)}>x</Button>
                      </div>)
                    )}
              </div>
            </Col>
          </Row>
        </div>
    </div>
    )
  }
}

const mapStateToProps = function(state){
  return {
    lessons: state.lessons
  }
}

export default connect(mapStateToProps, {getLessons})(Lessons)
