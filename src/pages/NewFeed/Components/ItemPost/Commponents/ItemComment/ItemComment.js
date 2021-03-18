import React, { Component } from 'react';
import './ItemComment.css';
import { Card, Accordion } from 'react-bootstrap';
class ItemComment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      comments: []
    };
  }
  // componentWillMount(){}
  // componentDidMount(){}
  // componentWillUnmount(){}
  // componentWillReceiveProps(){}
  // shouldComponentUpdate(){}
  // componentWillUpdate(){}
  // componentDidUpdate(){}

  render() {
    return (

      <Accordion.Collapse eventKey="1">
        <Card className="card-item-comment">
          <Card.Body className="item-comment">
            <h6>{this.props.dataComment.username}</h6>
            <p>{this.props.dataComment.content}</p>
          </Card.Body>
        </Card>
      </Accordion.Collapse>
    )
  }
}

export default ItemComment;