import React, {Component} from 'react';
import { connect } from 'react-redux';
import './index.css';
import {Nav, Navbar, NavDropdown, Col, Row, Container, Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'

class Navigation extends Component {

  render() {
    return (

      <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">Teacher Lesson Planner</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="#link">My Lessons</Nav.Link>
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

          <Link to={`/lessons/new`}>
          <Button variant="outline-success">New Lesson</Button>
        </Link>

      </Navbar.Collapse>
    </Navbar>
    )
  }
}

export default Navigation
