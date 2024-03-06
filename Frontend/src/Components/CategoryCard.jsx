import React from 'react';
import Card from 'react-bootstrap/Card';
import './CategoryCard.css'; // Import CSS file
import { Link } from 'react-router-dom';

function CustomCategoryCard(props) {

  const path = `/category/${props.GENRE}`;

  return (
    <div className={`card-container `}>
      <Card className="custom-Category-card">
        {/* Use Card.Img as background and place text inside Card.Body */}
        <Card.Img src="/images/profile.jpg" alt={props.GENRE} className="card-image" />
        <Link to={path}>
          <Card.Body className="text-center overlay">
            <Card.Text style={{ color: '#f0f3f2', fontWeight: 'bold', fontSize: '30px' }}>{props.GENRE}</Card.Text>
          </Card.Body>
        </Link>
      </Card>
    </div>
  );
}

export default CustomCategoryCard;
