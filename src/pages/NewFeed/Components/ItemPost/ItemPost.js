import React, { Component } from 'react';
import './ItemPost.css';
import { Button, Card, Accordion, InputGroup, FormControl } from 'react-bootstrap';

class ItemPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      title: "",
      content: ""

    };
  }
  render() {
    return (
      <div className="item">
        <Card style={{}}>
          <Card.Img variant="top" src={this.props.dataPost.image} />
          <Card.Body>
            <Card.Title>{this.props.dataPost.title}</Card.Title>
            <Card.Text>
              {this.props.dataPost.content}
            </Card.Text>
            <div className="comment">
              <Accordion defaultActiveKey="0">
                <Card>
                  <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="1">
                      Comments (9+)
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="1">
                    <Card className="card-item-comment">
                      <Card.Body className="item-comment">
                        <h6>Khoi Nguyen</h6>
                        <p>This is comment</p>
                      </Card.Body>
                    </Card>
                  </Accordion.Collapse>

                  <Accordion.Collapse eventKey="1">
                    <Card className="card-item-comment">
                      <Card.Body className="item-comment">
                        <h6>Khoi Nguyen</h6>
                        <p>This is comment</p>
                      </Card.Body>
                    </Card>
                  </Accordion.Collapse>

                  <Accordion.Collapse eventKey="1">
                    <Card className="card-item-comment">
                      <Card.Body className="item-comment">
                        <h6>Khoi Nguyen</h6>
                        <p>This is comment</p>
                      </Card.Body>
                    </Card>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
              <div className="pt-2">
                <InputGroup>
                  <FormControl
                    placeholder="Enter comment..."
                    aria-label="Enter comment..."
                    aria-describedby="basic-addon2"
                  />
                  <InputGroup.Append>
                    <Button variant="outline-secondary">Comment</Button>
                  </InputGroup.Append>
                </InputGroup>
              </div>
            </div>
          </Card.Body>
        </Card>
      </div>
    );

  }

}

export default ItemPost;