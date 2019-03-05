import React, {Component} from 'react';
import { connect } from 'react-redux';
import './index.css';
import {Form, FormControl, Nav, Navbar, NavDropdown, Col, Row, Container, Button} from 'react-bootstrap'

import { Link } from 'react-router-dom'
import { getLessons, createLesson, deleteLesson} from './actions'

const apiLink = "http://localhost:3001";

class LessonForm extends Component {
  state = {
    lessons: [],
    lessonTitle: '',
    lessonDescription: '',
    lessonBody: '',
    lessonSource: '',
    lessonGrade: '',
    lessonSubject: 'science',
    lessonGrade: 'pre-k'
  }

    handleOnChange(e){
      this.setState({
        [e.target.name]: e.target.value
      })
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
        subject: this.state.lessonSubject,
        grade: this.state.lessonGrade
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
      lessonSubject: '',
      lessonGrade: ''
    })
    }

  handleDelete = (id) => {
    this.props.deleteLesson(id)
  }

  render() {
    return (
      <div>

      {/* <div className='lessons'>
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
        </div> */}



        <div className="lesson-form">
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

                <div className='form-group'>
                  <select name='lessonGrade' value={this.state.lessonGrade} onChange={(i)=> {this.handleOnChange(i)}}>
                    <option value="pre-k">pre-k</option>
                    <option value="K">K</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                  </select>
                </div>

                <div className='submit-button' >
                  <Button type='submit' variant="outline-dark"> Submit </Button>
                </div>
              </form>

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

export default connect(mapStateToProps, {getLessons, createLesson, deleteLesson})(LessonForm)
