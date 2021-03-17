import React, { Component } from 'react';
import './Login.css';
import axios from 'axios'
import { Button, Container, Form, Card } from 'react-bootstrap';
import { Redirect } from 'react-router';
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }
  login = () => {
    const username = { username: "nexpando", password: "123456" };
    //const password = { password: "123456" };
    axios.post('http://localhost:3001/login', username)
      .then(response => {
        console.log(response.data);
        if (response.data.login) {
          console.log("login status: " + response.data.login);
          <Redirect to="/">
          </Redirect>
        }
      });
  }

  componentDidMount() {
    // Simple POST request with a JSON body using axios

  }

  render() {
    console.log(this.state);
    return (
      <Container>
        <div className="d-flex justify-content-center align-items-center form-login">
          <Card style={{ width: '20rem' }}>
            <Card.Body>
              <Form method="POST">
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Username</Form.Label>
                  <Form.Control name="username" onChange={(event) => {
                    this.setState({
                      username: event.target.value
                    })
                  }} type="text" placeholder="Enter email" />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control name="password" onChange={(event) => {
                    this.setState({
                      password: event.target.value
                    })
                  }} type="password" placeholder="Password" />
                </Form.Group>
                <Button onClick={this.login} variant="primary" type="submit" className="d-flex justify-content-center" >
                  login
              </Button>
              </Form>
            </Card.Body>
          </Card>
        </div>
      </Container>
    );
  }
}

export default Login;