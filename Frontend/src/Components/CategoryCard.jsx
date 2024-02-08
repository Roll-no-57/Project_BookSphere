import React from 'react';
import Card from 'react-bootstrap/Card';
import './CategoryCard.css'; // Import CSS file

function CustomCategoryCard(props) {
  return (
    <div className={`card-container `}>
      <Card className="custom-Category-card">
        {/* Use Card.Img as background and place text inside Card.Body */}
        <Card.Img src={props.image} alt={props.name} className="card-image" />
        <Card.Body className="text-center overlay">
          <Card.Text style={{ color: '#f0f3f2', fontWeight: 'bold' }}>{props.name}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CustomCategoryCard;
