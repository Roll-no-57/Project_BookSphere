import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';

const  MyreviewCard = (props) => {
    const { image, name, review, rating, date ,book_id} = props;



    return (
        <div>
            <Container fluid>
                <Card  style={{ backgroundColor: '#ffffe4' ,marginBottom:'10px'}}>
                    <Card.Body>
                <Row>
                    
                    <Col md={5} style={{ padding: '20px', width: '25%' }} className="3 d-flex flex-column">
                        <div className='book-image d-flex justify-content-center mt-2'>
                            <img src={image} alt='book' style={{ borderRadius: '10px', width: '150px' ,height:'220px'}} />
                        </div>
                    </Col>
                    <Col style={{ padding: '30px', paddingLeft: '70px' }} md={6} className="9 d-flex flex-column">
                        <div className='book-details'>
                            <Link to={`/book/${book_id}`} style={{ marginBottom: '30px', textDecoration: 'none' }} className="text-decoration-none text-primary bold">
                                <h5>{name}</h5>
                            </Link>
                            <div style={{ marginTop: '20px',marginBottom:'20px' }}>at- {date}</div>
                            {/* <h5 style={{ marginTop: '30px' }}>Rating : {rating}</h5> */}
                            <div>
                                {[...Array(rating)].map((_, i) => (
                                    <FaStar
                                        key={i}
                                        style={{ marginRight: 10 }}
                                        color='#FFBA5A'
                                        size={24}
                                    />
                                ))}
                            </div>
                            <p style={{ marginTop: '30px' }}>{review}</p>
                            
                            <Link to={`/book/${book_id}`} style={{ marginTop: '30px' }} className="btn btn-warning btn-sm mt-2">Edit Your Review</Link>
                        </div>
                    </Col>
                    
                </Row>
                    </Card.Body>
                </Card>
                
            </Container>
        </div>
    );
}

export default MyreviewCard;
