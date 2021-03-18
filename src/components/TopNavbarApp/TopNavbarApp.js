import React, { Component } from 'react';
import './TopNavbarApp.css';
import { Navbar, Form, Button, Nav } from 'react-bootstrap'
import { BsBoxArrowInLeft } from 'react-icons/bs';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
class TopNavbarApp extends Component {
  // constructor(props){
  // super(props);
  // this.state = {};
  // }


  submit = () => {
    confirmAlert({
      title: 'Confirm to logout',
      message: 'Are you logout.',
      buttons: [
        {
          label: 'Yes',
          onClick: () => {
            localStorage.removeItem('token');
            localStorage.removeItem('username');
            localStorage.removeItem('id');
            window.location.href = "/login";
          }
        },
        {
          label: 'No',
          onClick: () => {

          }
        }
      ]
    });
  };

  render() {
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">Instagram</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/profile">Profile</Nav.Link>
          </Nav>
          <Form inline>
            <p className=" mx-2 mt-2 d-flex align-items-center">{localStorage.getItem('username')}</p>
            <Button onClick={this.submit.bind(this)} variant="outline-danger"><BsBoxArrowInLeft></BsBoxArrowInLeft></Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default TopNavbarApp;