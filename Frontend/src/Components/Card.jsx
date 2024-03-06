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
        <Card.Img variant="top" src={props.IMAGE} />
        <Card.Body className="text-center" style={{ backgroundColor: '#ffffe4' }}>
          <Card.Subtitle style={{ marginBottom: '6px', fontWeight: 'bold' }}>{props.NAME}</Card.Subtitle>
          <Card.Subtitle style={{ marginBottom: '6px' }}>{props.AUTHOR_NAME}</Card.Subtitle>
          <Card.Subtitle style={{ marginBottom: '6px' }}>TK. {props.PRICE}</Card.Subtitle>
          {/* <Button variant="primary">Add to Cart</Button> */}
          {/* Use Link component instead of React Bootstrap's Link */}
          {/* // Remove the href attribute from the anchor tag for the eye icon */}



          <Link to={`/book/${props.ID}`} className="btn btn-warning btn-md " style={{ marginLeft: '5px' }}>View Book</Link>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CustomCard;



// <a href="#!" class="btn-action" data-bs-toggle="modal" data-bs-target="#quickViewModal">

// <i class="bi bi-eye" data-bs-toggle="tooltip" data-bs-html="true" aria-label="Quick View" data-bs-original-title="Quick View"></i>

// </a>
{/* <a href="#!" class="btn-action" data-bs-toggle="tooltip" data-bs-html="true" aria-label="Wishlist" data-bs-original-title="Wishlist"><i class="bi bi-heart"></i></a>

<a href="#!" class="btn-action" data-bs-toggle="tooltip" data-bs-html="true" aria-label="Compare" data-bs-original-title="Compare"><i class="bi bi-arrow-left-right"></i></a> */}
