import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Card.css'; // Import CSS file
// import { taka } from '../Pages/Constants';

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
          <Link to={`/book/${props.ID}`} >
            <Button variant='outline-warning' style={{ marginRight: '10px' }}>

              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
                <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z" />
                <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0" />
              </svg>
            </Button>
          </Link>


          <Button variant='outline-danger' style={{ marginRight: '10px' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
              <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
            </svg>
          </Button>

          <Button variant='outline-success' >
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-bag-plus" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5" />
              <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z" />
            </svg>

          </Button>




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
