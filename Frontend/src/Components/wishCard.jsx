import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const WishCard = (props) => {

    const handleclick = (deletebook) => {
        props.removeFromWishlist(deletebook);
    }

    return (
        <div>
            {props.products.map((book, index) => (
                <Container fluid key={index}>
                    <Row>
                        {/* Image column */}
                        <Col md={4} style={{ padding: '20px', width: '20%' }} className="3 d-flex flex-column">
                            <div className='book-image'>
                                <img src={book.BOOK_IMAGE} alt='book' style={{ borderRadius: '10px', width: '90%' }} />
                            </div>
                        </Col>

                        {/* Book details column */}
                        <Col style={{ padding: '30px', paddingLeft: '70px' }} md={6} className="9 d-flex flex-column">
                            <div className='book-details'>
                                <Link to={`/book/${book.BOOK_ID}`} style={{ marginBottom: '30px', textDecoration: 'none' }} className="text-decoration-none text-primary bold">
                                    <h5>{book.BOOK_NAME}</h5>
                                </Link>
                                <b style={{ marginTop: '30px' }}>By- {book.AUTHOR_NAME}</b>
                                <h5 style={{ marginTop: '30px' }}>Price : {book.BOOK_PRICE}$</h5>
                                <a href="#no" style={{ marginTop: '30px' }} className="btn btn-outline-danger" onClick={() => handleclick(book.BOOK_ID)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heartbreak" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M8.867 14.41c13.308-9.322 4.79-16.563.064-13.824L7 3l1.5 4-2 3L8 15a38.094 38.094 0 0 0 .867-.59Zm-.303-1.01c6.164-4.4 6.91-7.982 6.22-9.921C14.031 1.37 11.447.42 9.587 1.368L8.136 3.18l1.3 3.468a1 1 0 0 1-.104.906l-1.739 2.608.971 3.237Zm-1.25 1.137a36.027 36.027 0 0 1-1.522-1.116C-5.077 4.97 1.842-1.472 6.454.293c.314.12.618.279.904.477L5.5 3 7 7l-1.5 3 1.815 4.537Zm-2.3-3.06C.895 7.797.597 4.875 1.308 3.248c.756-1.73 2.768-2.577 4.456-2.127L4.732 2.36a1 1 0 0 0-.168.991L5.91 6.943l-1.305 2.61a1 1 0 0 0-.034.818l.442 1.106Z" />
                                    </svg>
                                    Remove from wishlist
                                </a>
                            </div>
                        </Col>
                    </Row>
                    <hr/>
                </Container>
            ))}
        </div>
    );
}

export default WishCard;
