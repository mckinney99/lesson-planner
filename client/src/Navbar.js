import React, {Component} from 'react';
import { connect } from 'react-redux';
import './index.css';
import {Nav, Navbar, NavDropdown, Col, Row, Container, Button, Form, DropdownButton, Dropdown} from 'react-bootstrap'
import LessonForm from './LessonForm';
import { Link } from 'react-router-dom'

class Navigation extends Component {

  render() {
    return (

      <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">Teacher Lesson Planner</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Nav className="mr-auto">
          <Nav.Link href="/lessons">My Lessons</Nav.Link>
          <NavDropdown title="Lesson Plans" id="basic-nav-dropdown">
            <NavDropdown.Item href="/lessons/science">Science</NavDropdown.Item>
            <NavDropdown.Item href="/lessons/math">Math</NavDropdown.Item>
            <NavDropdown.Item href="/lessons/art">Art</NavDropdown.Item>
            <NavDropdown.Item href="/lessons/english">English</NavDropdown.Item>
            <NavDropdown.Item href="/lessons/history">History</NavDropdown.Item>
            <NavDropdown.Item href="/lessons/music">Music</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Select By Grade</NavDropdown.Item>
          </NavDropdown>
        </Nav>

        <DropdownButton
          alignRight
          title="New Lesson"
          id="dropdown-menu-align-right">
              <LessonForm id="dropdown-lesson-form"/>
          </DropdownButton>


    </Navbar>
    )
  }
}

export default Navigation
