import React from 'react';
import axios from 'axios';
import './UserCard.css';
import { Card, Button } from 'react-bootstrap';

class UserCard extends React.Component {
  state = {
    username: '',
    email: '',
  };
  render() {
    return (
      <div>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        <h2>{this.props.username}</h2>
        <h2>{this.props.email}</h2>
      </div>
    );
  }
}

export default UserCard;
