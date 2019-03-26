import React, {Component} from 'react';
import { connect } from 'react-redux';
import '../index.css';
import {Form, FormControl, Nav, Navbar, NavDropdown, Col, Row, Container, Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { getLessons, createLesson, deleteLesson} from '../actions'

const apiLink = "http://localhost:3001";

class Home extends Component {
  render() {
    return (
      <Container>
        <br />
        <br />
        <div className="front-page-text">
          <h1> A Place to Share + Organize Lesson Plans</h1>
          <br/>
          <h2> A place for teachers to create, store, and organize lesson plans.
            Current features allow users to create, delete, edit and filter through lessons on the public database.
            Future plans are for allowing users to add lesson plans to customized folders, and share folders and plans with others on the site.
            This is a continuous web project by Eric McKinney - mckinney99@gmail.com
          </h2>
          <br/>
          <a href="http://www.emckin.com" className='eric-link'> Eric's Portfolio</a>
        </div>
        <br />
        <br />
      </Container>
    )
  }
}

export default(Home)
