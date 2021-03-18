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
      items: [],
    };
  }

  componentDidMount() {

    const requestOptions = {
      method: 'GET',
      headers: { "Authorization": `Bearer ${localStorage.getItem('token')}` },
    };
    fetch("http://localhost:3001/", requestOptions)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.posts.rows,
          });
        },
        (error) => {

          this.setState({
            isLoaded: true,
            error
          });
          window.location.href = "/login"
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
          <Col xl={3} md={4}>
            <FormCreateContent>
            </FormCreateContent>
          </Col>
          <Col xl={6} md={8}>
            <div className="list-content">
              {items.map(item => (
                <ItemPost key={item.id} dataPost={item}></ItemPost>
              ))}
            </div>
          </Col>
          <Col xl={3}></Col>
        </Row>
      </Container >
    );
  }
}

export default NewFeed;