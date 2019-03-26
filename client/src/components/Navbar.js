import React, {Component} from 'react';
import { connect } from 'react-redux';
import '../index.css';
import {Nav, Navbar, NavDropdown, Col, Row, Container, Button, Form, DropdownButton, Dropdown} from 'react-bootstrap'
// import { LinkContainer } from 'react-router-bootstrap';
import LessonForm from '../containers/LessonForm';
import { Link } from 'react-router-dom'
import { LinkContainer, IndexLinkContainer } from 'react-router-bootstrap';

class Navigation extends Component {

  render() {
    return (

      <Navbar bg="light" expand="md">
        <LinkContainer to="/">
          <Navbar.Brand>Teacher Lesson Planner</Navbar.Brand>
        </LinkContainer>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">


            <IndexLinkContainer className="nav-link" to="/lessons">
               <Link to="/lessons" > Lessons </Link>
             </IndexLinkContainer>


          <NavDropdown title="Subjects" id="basic-nav-dropdown">
            <LinkContainer to="/subjects/science"><NavDropdown.Item >Science</NavDropdown.Item></LinkContainer>
            <LinkContainer to="/subjects/math"><NavDropdown.Item>Math</NavDropdown.Item></LinkContainer>
            <LinkContainer to="/subjects/art"><NavDropdown.Item>Art</NavDropdown.Item></LinkContainer>
            <LinkContainer to="/subjects/english"><NavDropdown.Item>English</NavDropdown.Item></LinkContainer>
            <LinkContainer to="/subjects/history"><NavDropdown.Item>History</NavDropdown.Item></LinkContainer>
            <LinkContainer to="/subjects/music"><NavDropdown.Item>Music</NavDropdown.Item></LinkContainer>
          </NavDropdown>
          <NavDropdown title="Grades" id="basic-nav-dropdown">
            <LinkContainer to="/grades/pre-k"><NavDropdown.Item>Pre-K</NavDropdown.Item></LinkContainer>
            <LinkContainer to="/grades/1"><NavDropdown.Item>1</NavDropdown.Item></LinkContainer>
            <LinkContainer to="/grades/2"><NavDropdown.Item>2</NavDropdown.Item></LinkContainer>
            <LinkContainer to="/grades/3"><NavDropdown.Item>3</NavDropdown.Item></LinkContainer>
            <LinkContainer to="/grades/4"><NavDropdown.Item>4</NavDropdown.Item></LinkContainer>
            <LinkContainer to="/grades/5"><NavDropdown.Item>5</NavDropdown.Item></LinkContainer>
            <LinkContainer to="/grades/6"><NavDropdown.Item>6</NavDropdown.Item></LinkContainer>
            <LinkContainer to="/grades/7"><NavDropdown.Item>7</NavDropdown.Item></LinkContainer>
            <LinkContainer to="/grades/8"><NavDropdown.Item>8</NavDropdown.Item></LinkContainer>
            <LinkContainer to="/grades/9"><NavDropdown.Item>9</NavDropdown.Item></LinkContainer>
            <LinkContainer to="/grades/10"><NavDropdown.Item>10</NavDropdown.Item></LinkContainer>
            <LinkContainer to="/grades/11"><NavDropdown.Item>11</NavDropdown.Item></LinkContainer>
            <LinkContainer to="/grades/12"><NavDropdown.Item>12</NavDropdown.Item></LinkContainer>
          </NavDropdown>
        </Nav>

        <DropdownButton
          alignRight
          title="New Lesson"
          id="dropdown-menu-align-right">
              <LessonForm id="dropdown-lesson-form"/>
          </DropdownButton>

</Navbar.Collapse>

    </Navbar>
    )
  }
}

export default Navigation
