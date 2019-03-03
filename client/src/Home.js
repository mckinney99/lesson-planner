import React, {Component} from 'react';
import { connect } from 'react-redux';
import './index.css';
import {Form, FormControl, Nav, Navbar, NavDropdown, Col, Row, Container, Button} from 'react-bootstrap'

import { Link } from 'react-router-dom'
import { getLessons, createLesson, deleteLesson} from './actions'

const apiLink = "http://localhost:3001";

class Home extends Component {
  state = {
    lessons: [],
    lessonTitle: '',
    lessonDescription: '',
    lessonBody: '',
    lessonSource: '',
    lessonGrade: '',
    lessonSubject: ''
  }

    handleOnChange(e){
      this.setState({
        [e.target.name]: e.target.value
      })
    }

    clickButton = () => {
      console.log('clicked the button')
    }

  handleLessonSubmit(event) {
    event.preventDefault();
    console.log("submitting lesson")
      const lesson = JSON.stringify({lesson: {
        title: this.state.lessonTitle,
        description: this.state.lessonDescription,
        body: this.state.lessonBody,
        source: this.state.lessonSource,
        grade: this.state.lessonGrade,
        subject: this.state.lessonSubject
      }
      })
      console.log(lesson)
      this.props.createLesson(lesson)
      this.setState({
      lessonTitle: '',
      lessonDescription: '',
      lessonBody: '',
      lessonSource: '',
      lessonGrade: '',
      lessonSubject: ''
    })
    }

  handleDelete = (id) => {
    this.props.deleteLesson(id)
  }

  render() {
    return (
      <div>
      <Container className='lessons'>
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
        </Container>

        <Container className="lesson-form">
          <Row>
            <Col>


              <form
                onSubmit={(event)=>  this.handleLessonSubmit(event)}
                className='new-lesson-form'>

                <div className='form-group center-block' >
                  <input
                    type='text'
                    placeholder='Lesson Name'
                    name='lessonTitle'
                    onChange={(i)=> {this.handleOnChange(i)}}
                    value={this.state.lessonTitle}></input>
                </div>
                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Lesson Description'
                    name='lessonDescription'
                    onChange={(i)=> {this.handleOnChange(i)}}
                    value={this.state.lessonDescription}></input>
                </div>
                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Lesson Body'
                    name='lessonBody'
                    onChange={(i)=> {this.handleOnChange(i)}}
                    value={this.state.lessonBody}></input>
                </div>
                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Lesson Source'
                    name='lessonSource'
                    onChange={(i)=> {this.handleOnChange(i)}}
                    value={this.state.lessonSource}></input>
                </div>
                <div className='form-group'>
                  <select name='lessonSubject' value={this.state.lessonSubject} onChange={(i)=> {this.handleOnChange(i)}}>
                    <option value="science">Science</option>
                    <option value="math">Math</option>
                    <option value="art">Art</option>
                    <option value="english">English</option>
                    <option value="history">History</option>
                    <option value="music">Music</option>
                  </select>
                </div>

                <div className='submit-button' >
                  <Button type='submit' variant="outline-dark"> Submit </Button>
                </div>
              </form>

          </Col>
        </Row>
      </Container>
    </div>
    )
  }
}

const mapStateToProps = function(state){
  return {
    lessons: state.lessons
  }
}

export default connect(mapStateToProps, {getLessons, createLesson, deleteLesson})(Home)
