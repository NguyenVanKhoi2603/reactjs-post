import React, { Component } from 'react';
import './Profile.css';
import TopNavbarApp from '../../components/TopNavbarApp';
import { Container } from 'react-bootstrap';
class Profile extends Component {
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
      <Container fluid>
        <TopNavbarApp>
        </TopNavbarApp>
        Day la profile
      </Container>

    );
  }
}

export default Profile;