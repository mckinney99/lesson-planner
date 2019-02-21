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
    lessonGrade: ''
  }

    // onChange(e){
    //   let lesson = {}
    //   lesson[e.target.name] = e.target.value
    //   this.setState(lesson)
    // }

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
        grade: this.state.grade
      }
      })
      this.props.createLesson(lesson)
      this.setState({
      lessonTitle: '',
      lessonDescription: '',
      lessonBody: '',
      lessonSource: '',
      lessonGrade: ''
    })
    }

  handleDelete = (id) => {
    this.props.deleteLesson(id)
  }

  render() {


    return (
      <Container className='main'>

        <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Teacher Lesson Planner</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">My Lessons</Nav.Link>
            <NavDropdown title="Lesson Plans" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Science</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Math</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Art</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">English</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.5">History</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.6">Music</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Select By Grade</NavDropdown.Item>
            </NavDropdown>
          </Nav>

            <Link to={`/lessons/new`}>
            <Button variant="outline-success">New Lesson</Button>
          </Link>

        </Navbar.Collapse>
      </Navbar>

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
                  <select value={this.state.value} onChange={this.handleChange}>
                    <option value="grapefruit">Grapefruit</option>
                    <option value="lime">Lime</option>
                    <option value="coconut">Coconut</option>
                    <option value="mango">Mango</option>
                  </select>
                </div>

                <div className='submit-button' >
                  <Button type='submit' variant="outline-dark"> Submit </Button>
                </div>
              </form>

          </Col>
        </Row>
      </Container>
    </Container>
    )
  }
}

const mapStateToProps = function(state){
  return {
    lessons: state.lessons
  }
}

export default connect(mapStateToProps, {getLessons, createLesson, deleteLesson})(Home)
