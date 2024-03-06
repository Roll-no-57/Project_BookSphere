import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Card.css'; // Import CSS file
import { taka } from '../Pages/Constants';

function CustomCard(props) {
  

  return (
    <div className="card-container" >
      <Card className="custom-card" >
        <Card.Img style={{ marginBottom: '-22px' }} variant="top" src={props.IMAGE} />
        <Card.Body className="text-center" style={{backgroundColor:'#ffffe4'}}>
          <Card.Header style={{ marginBottom: '6px', fontWeight: 'bold' }}>{props.NAME}</Card.Header>
          <Card.Subtitle style={{ marginBottom: '6px' }}>Writer: {props.AUTHOR_NAME}</Card.Subtitle>
          <Card.Subtitle style={{ marginBottom: '6px' }}>Price:{taka} {props.PRICE}</Card.Subtitle>
          <Button variant="primary">Add to Cart</Button>
          {/* Use Link component instead of React Bootstrap's Link */}
          <Link to={`/book/${props.ID}`} className="btn btn-warning btn-md " style={{marginLeft:'10px'}}>View Book</Link>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CustomCard;

