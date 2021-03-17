import React, { Component } from 'react';
import './NewFeed.css';
import TopNavbarApp from '../../components/TopNavbarApp';
import ItemPost from './Components/ItemPost';
import FormCreateContent from './Components/FormCreateContent';
import { Container, Row, Col } from 'react-bootstrap';

class NewFeed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch("http://localhost:3001/")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.posts.rows
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

  render() {
    const { items } = this.state;
    return (
      <Container fluid>
        <TopNavbarApp></TopNavbarApp>
        <div className="body-content" >
        </div>
        <Row>
          <Col md={3}>
            <FormCreateContent>
            </FormCreateContent>
          </Col>
          <Col md={6}>
            <div className="list-content">
              {items.map(item => (
                <ItemPost key={item.id} dataPost={item}></ItemPost>
              ))}

            </div>
          </Col>
          <Col md={3}></Col>
        </Row>
      </Container>
    );
  }
}

export default NewFeed;