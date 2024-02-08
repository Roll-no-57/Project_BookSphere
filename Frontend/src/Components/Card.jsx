import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Card.css'; // Import CSS file


function CustomCard(props) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className={`card-container `}>
      <Card className="custom-card" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
        <Card.Img style={{ marginBottom: '-22px' }} variant="top" src={props.image} />
        <Card.Body className="text-center">
          <Card.Header style={{ marginBottom: '6px', fontWeight: 'bold' }}>{props.name}</Card.Header>
          <Card.Subtitle style={{ marginBottom: '6px' }}>Writer: {props.author}</Card.Subtitle>
          <Card.Subtitle style={{ marginBottom: '6px' }}>Price: {props.price}</Card.Subtitle>
          <Button variant="primary">Add to Cart</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CustomCard;
