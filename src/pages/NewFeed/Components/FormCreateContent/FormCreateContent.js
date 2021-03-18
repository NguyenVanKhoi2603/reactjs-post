import React, { Component } from 'react';
import './FormCreateContent.css';
import { Button, Form } from 'react-bootstrap';
import axios from 'axios';

class FormCreateContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      content: "",
      image: "",
      user_id: "",
    };
  }

  postContent = () => {
    var user_id = localStorage.getItem('id');
    const post = { title: this.state.title, content: this.state.content, image: this.state.image, user_id: user_id };
    axios.post('http://localhost:3001/post', post)
      .then(response => {
        console.log(response.data);
        if (response.data.message) {
          alert(response.data.message);
        } else {
          alert(response.data.message);
        }
      });
  }

  render() {
    return (
      <div className="form-create-content">
        <Form>
          <Form.Group controlId="formBasicTitle">
            <Form.Label>Title</Form.Label>
            <Form.Control
              onChange={i => this.setState({ title: i.target.value })
              }
              type="text"
              placeholder="Enter title..." />
          </Form.Group>
          <Form.Group controlId="formBasicContent">
            <Form.Label>Content</Form.Label>
            <Form.Control
              as="textarea"
              rows={6}
              onChange={i => this.setState({ content: i.target.value })
              }
              placeholder="Enter content..." />
          </Form.Group>
          <Form.Group controlId="formBasicLinkImage">
            <Form.Label>Link image</Form.Label>
            <Form.Control
              type="text"
              onChange={i => this.setState({ image: i.target.value })
              }
              placeholder="Enter link image..." />
          </Form.Group>
          <Button onClick={this.postContent} variant="outline-info" className="d-flex justify-content-center" type="submit">
            PUBLISH
              </Button>
        </Form>
      </div>
    );
  }
}

export default FormCreateContent;