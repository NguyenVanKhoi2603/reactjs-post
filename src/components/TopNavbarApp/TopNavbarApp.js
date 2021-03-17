import React, { Component } from 'react';
import './TopNavbarApp.css';
import { Navbar, Form, Button, Nav } from 'react-bootstrap'


class TopNavbarApp extends Component {
  // constructor(props){
  // super(props);
  // this.state = {};
  // }

  render() {
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Instagram</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#profile">Profile</Nav.Link>
          </Nav>
          <Form inline>
            <h5 className="mx-2">Khoi</h5>
            <Button href="/login" variant="outline-danger">Logout</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default TopNavbarApp;