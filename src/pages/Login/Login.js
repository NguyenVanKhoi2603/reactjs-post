import React, { Component } from 'react';
import './Login.css';
import axios from 'axios'
import { Button, Container, Form, Card } from 'react-bootstrap';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }

  login = () => {
    const username = { username: this.state.username, password: this.state.password };
    axios.post('http://localhost:3001/login', username)
      .then(response => {

        if (response.data.login) {

          localStorage.setItem('token', response.data.accessToken);
          localStorage.setItem('username', this.state.username);
          localStorage.setItem('id', response.data.user_id);
          alert(response.data.message);
          window.location.href = "/";
        } else {
          alert(response.data.message);
          window.location.href = "/login";
        }
      });
  }

  componentDidMount() {
  }

  render() {

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
                <Button onClick={this.login} variant="outline-info" type="submit" className="d-flex justify-content-center" >
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