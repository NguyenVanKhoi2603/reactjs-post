import React, { Component } from 'react';
import './FormCreateContent.css';
import { Button, Form } from 'react-bootstrap';

class FormCreateContent extends Component {
  // constructor(props){
  // super(props);
  // this.state = {};
  // }

  // componentWillMount(){}
  // componentDidMount(){}
  // componentWillUnmount(){}

  // componentWillReceiveProps(){}
  // shouldComponentUpdate(){}
  // componentWillUpdate(){}
  // componentDidUpdate(){}

  render() {
    return (
      <div className="form-create-content">
        <Form>
          <Form.Group controlId="formBasicTitle">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" placeholder="Enter title" />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control as="textarea" rows={6} placeholder="Enter content" />
          </Form.Group>
          <Form.Group controlId="formBasicLinkImage">
            <Form.Label>Link image</Form.Label>
            <Form.Control type="email" placeholder="Enter link image" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
              </Button>
        </Form>
      </div>
    );
  }
}

export default FormCreateContent;