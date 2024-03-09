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

        {
          props.DISCOUNT > 0 ?
            <span class="position-absolute top-0 start-30 translate-middle badge rounded-pill bg-danger">
              {props.DISCOUNT}% off
              <span class="visually-hidden">unread messages</span>
            </span>
            :
            null
        }
        <Card.Img variant="top" src={props.IMAGE} />
        <Card.Body className="text-center" style={{ backgroundColor: '#ffffe4' }}>
          <Card.Subtitle style={{ marginBottom: '6px', fontWeight: 'bold' }}>{props.NAME}</Card.Subtitle>
          <Card.Subtitle style={{ marginBottom: '6px' }}>{props.AUTHOR_NAME}</Card.Subtitle>
          <Card.Subtitle style={{ marginBottom: '6px' }}>TK. {props.PRICE}</Card.Subtitle>

          {
            props.STOCK > 0 ?
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <i class="bi bi-check-circle-fill" style={{ color: 'green', fontSize: '15px', marginRight: '10px' }}></i>
                <p style={{ marginBottom: '6px', color: 'green' }}>Product In Stock</p>
              </div>
              :
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <i class="bi bi-exclamation-triangle-fill" style={{ color: 'red', fontSize: '15px', marginRight: '10px' }}></i>
                <p style={{ marginBottom: '6px', color: 'red' }}>Out of Stock</p>
              </div>
          }

          <Link to={`/book/${props.ID}`} >
            <Button variant='outline-warning' style={{ marginRight: '10px' }}>

              <i className='bi bi-eye' style={{ fontSize: '16px' }}></i>
            </Button>
          </Link>


          <Button variant='outline-danger' style={{ marginRight: '10px' }}>
            <i className='bi bi-heart' style={{ fontSize: '16px' }}></i>

          </Button>

          <Button variant='outline-success' >

            <i className='bi bi-bag-plus' style={{ fontSize: '16px' }}></i>

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
