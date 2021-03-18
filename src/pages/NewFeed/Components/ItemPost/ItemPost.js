import React, { Component } from 'react';
import './ItemPost.css';
import ItemComment from './Commponents/ItemComment';
import { FiSend } from 'react-icons/fi';


import { Card, Accordion, Button, InputGroup, FormControl } from 'react-bootstrap';
import axios from 'axios';
class ItemPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      error: null,
      isLoaded: false,
      comments: [],
      content: "",

    };
  }

  componentDidMount() {
    fetch("http://localhost:3001/comment/")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            comments: result
          });
        },
        (error) => {
          console.log("Error =======" + error);
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  PublishComment = (post_id) => {
    var user_id = localStorage.getItem('id');
    const comment = { user_id: user_id, post_id: post_id, content_comment: this.state.content };
    axios.post('http://localhost:3001/comment', comment)
      .then(response => {
        if (response.data.message) {
          alert("Notification: " + response.data.message);
        }
      });
  }

  handleClick() {
    alert("Click comment ")
  }



  render() {
    const { comments } = this.state;

    var i = 0;
    var id_post = this.props.dataPost.id;
    if (comments.length > 0) {
      for (const item of comments) {
        if (item.post_id === this.props.dataPost.id) {
          i++;
        }
      }
    }
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
                      Comments ({i})
                    </Accordion.Toggle>
                  </Card.Header>
                  {comments.map(item => item.post_id === this.props.dataPost.id ? (
                    <ItemComment key={item.id} dataComment={item}></ItemComment>
                  ) : (<Accordion.Collapse key={item.id}>
                    <Card className="card-item-comment">
                      <Card.Body className="item-comment">
                      </Card.Body>
                    </Card>
                  </Accordion.Collapse>))}
                  <Card.Footer>
                    <div className="">
                      <InputGroup>
                        <FormControl
                          placeholder="Enter comment..."
                          aria-label="Enter comment..."
                          onChange={e => this.setState({
                            content: e.target.value
                          })}
                          aria-describedby="basic-addon2"
                        />
                        <InputGroup.Append>
                          <Button onClick={this.PublishComment.bind(this, id_post)} variant="outline-info"><FiSend></FiSend></Button>
                        </InputGroup.Append>
                      </InputGroup>
                    </div>
                  </Card.Footer>
                </Card>
              </Accordion>
            </div>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default ItemPost;