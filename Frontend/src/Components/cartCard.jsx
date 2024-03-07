import React, { useState } from 'react';
import { Container, Row, Col, Card, Image, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { taka } from '../Pages/Constants';
import { updateQty,deletePicked} from '../Pages/API'


const CartCard = (props) => {



  const product = props.product;


    {/* this section will handle the count logic */}

  const [count, setCount] = useState(product.AMOUNT);

  const incrementCount = async () => {
    await updateQty(product.PICKED_ID, count+1 );
    setCount(count + 1);
  };

  const decrementCount =async () => {
    if (count > 0) {
      await updateQty(product.PICKED_ID, count-1 );
      setCount(count - 1);
    }
  };

  const totalPrice = product.PRICE * count; // Assuming price is 100 and currency is taka


  {/* this section will handle the delete logic */}
  const handleDeleteBook = async () => {
    await deletePicked(product.PICKED_ID );
    props.deleteBook();
  };



  return (

    <Container className="m-3" >
      <Row>
        <Col>
          <Card>

            <Card.Body style={{ backgroundColor: '#ffffe4', width: '950px' }}>

              <Row>

                <Col md={3}>
                  <Image src={product.IMAGE} fluid rounded style={{ height: '200px', width: '140px' }} />
                </Col>

                <Col md={3}>
                  <div style={{ marginBottom: '20px' }}>
                    <Link to={`/book/${product.ID}`} style={{ textDecoration: 'none' }}><h4>{product.NAME}</h4></Link>
                  </div>
                  <p>{product.AUTHOR_NAME}</p>
                  <p>Price: TK. {product.PRICE}</p>


                  <i class="bi bi-heart-pulse" style={{ fontSize: '25px', cursor: 'pointer', marginRight: '30px', color: 'red' }}></i>

                  <i class="bi bi-trash" style={{ fontSize: '25px', cursor: 'pointer' }} onClick={handleDeleteBook} ></i>

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
