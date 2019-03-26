import React, {Component} from 'react';
import { connect } from 'react-redux';
import '../index.css';
import {Form, FormControl, Nav, Navbar, NavDropdown, Col, Row, Container, Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { getLessons, createLesson, deleteLesson} from '../actions'

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
    lessonGrade: 'pre-k',
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
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        this.setState({ validated: true });
      }



  handleDelete = (id) => {
    this.props.deleteLesson(id)
  }

  render() {
    const { validated } = this.state;
    return (
      <div>

        <div className="lesson-form">
          <Row>
            <Col>
              <Form
                  onSubmit={(event)=>  this.handleLessonSubmit(event)}
                  className='new-lesson-form'>

                <Form.Group controlId="formHorizontalTitle" >
                  <input
                    type='text'
                    placeholder='Lesson Name'
                    name='lessonTitle'
                    onChange={(i)=> {this.handleOnChange(i)}}
                    value={this.state.lessonTitle}
                    required></input>
                  </Form.Group>
                <Form.Group controlId="formHorizontalDescription">
                  <input
                    type='text'
                    placeholder='Lesson Description'
                    name='lessonDescription'
                    onChange={(i)=> {this.handleOnChange(i)}}
                    value={this.state.lessonDescription}
                    required></input>
                </Form.Group>
                <Form.Group controlId="formHorizontalBody">
                  <textarea
                    type='text'
                    placeholder='Lesson Body'
                    name='lessonBody'
                    onChange={(i)=> {this.handleOnChange(i)}}
                    value={this.state.lessonBody}
                    required></textarea>
                </Form.Group>
                <Form.Group controlId="formHorizontalTeacher">
                  <input
                    type='text'
                    placeholder='Teacher Name'
                    name='lessonSource'
                    onChange={(i)=> {this.handleOnChange(i)}}
                    value={this.state.lessonSource}
                    required></input>
                </Form.Group>
                <Form.Group controlId="formDropdownLessonSubject">
                  <select name='lessonSubject' value={this.state.lessonSubject} onChange={(i)=> {this.handleOnChange(i)}}>
                    <option value="science">Science</option>
                    <option value="math">Math</option>
                    <option value="art">Art</option>
                    <option value="english">English</option>
                    <option value="history">History</option>
                    <option value="music">Music</option>
                  </select>
                </Form.Group>

                <Form.Group controlId="formDropdownLessonGrade">
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
                </Form.Group>


                  <div className='submit-button' >
                    <Button type='submit' variant="outline-dark"> Submit </Button>
                  </div>
              </Form>

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
