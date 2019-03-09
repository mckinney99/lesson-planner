import React, {Component} from 'react';
import { connect } from 'react-redux';
import './index.css';
import {Form, FormControl, Nav, Navbar, NavDropdown, Col, Row, Container, Button} from 'react-bootstrap'

import { Link } from 'react-router-dom'
import { getLessons, createLesson, deleteLesson} from './actions'

const apiLink = "http://localhost:3001";

class Home extends Component {
  render() {
    return (
      <Container>
        <div className="front-page-text">
          <h1> A Place to Share + Organize Lesson Plans</h1>
        </div>
      </Container>
    )
  }
}

export default(Home)
