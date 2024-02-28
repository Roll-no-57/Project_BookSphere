import React, { useState } from 'react';
import { Container, Row, Col, Card, Image, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { taka } from '../Pages/Constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faHeart } from '@fortawesome/free-solid-svg-icons';

const CartCard = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const totalPrice = taka * 100 * count; // Assuming price is 100 and currency is taka

  return (
    <Container className="m-3">
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <Row>
                <Col md={3}>
                  <Image src="/images/book1.jpg" fluid rounded style={{ height: '140px', width: '120px' }} />
                </Col>
                <Col md={3}>
                  <div style={{ marginBottom: '20px' }}>
                    <Link to="/book/1">Book Name</Link>
                  </div>
                  <p>Author Name</p>
                  <p>Price: {taka}100</p>
                  {/* Add heart icon for adding to wishlist */}
                  <FontAwesomeIcon icon={faHeart} style={{ cursor: 'pointer', marginRight: '30px' ,color:'red' }} />
                  {/* Replace button with delete icon */}
                  <FontAwesomeIcon icon={faTrash} style={{ cursor: 'pointer' }} />
                </Col>
                <Col md={3} style={{ marginTop: '30px' }}>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Button variant="secondary" onClick={decrementCount} style={{ padding: '0.25rem 0.5rem', fontSize: '0.8rem' }}>
                      <i style={{ fontSize: '1rem' }}>-</i>
                    </Button>
                    <p style={{ padding: '10px', margin: '10px', fontSize: '20px' }}>{count}</p>
                    <Button variant="secondary" onClick={incrementCount} style={{ padding: '0.25rem 0.5rem', fontSize: '0.8rem' }}>
                      <i style={{ fontSize: '1rem' }}>&#43;</i>
                    </Button>
                  </div>
                </Col>
                <Col md={3} style={{ marginTop: '50px' }}>
                  <p>Total: {taka} {totalPrice}</p>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default CartCard;
