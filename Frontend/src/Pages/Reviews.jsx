import React, { useState } from 'react';
import CustomNavbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import './User.css';
import Container from 'react-bootstrap/Container';
import 'react-datepicker/dist/react-datepicker.css';
import MyreviewCard from '../Components/MyreviewCard'; // Capitalized the component name


const Wishlist = () => {

    const reviews = [
        {
            id: 1,
            image: '/images/book1.jpg',
            name: 'Product 1',
            review: 'This is a review of product 1.I really love this book . I love a lot of things about this book. but I never get the thing what I love most so I am loser I cant do anything . I am shit',
            rating: 5,
            date: '2021-08-01'
        },
        {
            id: 1,
            image: '/images/book1.jpg',
            name: 'Product 1',
            review: 'This is a review of product 1',
            rating: 5,
            date: '2021-08-01'
        },
        {
            id: 1,
            image: '/images/book1.jpg',
            name: 'Product 1',
            review: 'This is a review of product 1',
            rating: 5,
            date: '2021-08-01'
        },
        {
            id: 1,
            image: '/images/book1.jpg',
            name: 'Product 1',
            review: 'This is a review of product 1',
            rating: 5,
            date: '2021-08-01'
        }
    ]


    return (
        <div>
            <CustomNavbar />

            <div style={{ display: 'flex', justifyContent: 'center', marginLeft: '80px' }}>
                <Container fluid>
                    <Row>
                        <Col style={{ width: '20%', marginRight: '10px' }} xs={4} md={3} lg={2}>
                            <Row>
                                <div className='user-profile'>
                                    <img src="/images/user.png" alt="user" />
                                    <h3>Hello</h3>
                                    <p>Apurbo</p>
                                </div>
                            </Row>
                            <Row>
                                <div className='user-Actions'>
                                    <ListGroup variant="flush">
                                        <ListGroup.Item action href="/my-section/profile" active>
                                            My Account
                                        </ListGroup.Item>
                                        <ListGroup.Item action href="/my-section/orders">
                                            My Orders
                                        </ListGroup.Item>
                                        {/* <ListGroup.Item action href="#">
                                            My Lists
                                        </ListGroup.Item> */}
                                        <ListGroup.Item action href="/my-section/wishlist">
                                            My Wishlist
                                        </ListGroup.Item>
                                        <ListGroup.Item action href="/my-section/reviews">
                                            My Ratings and Reviews
                                        </ListGroup.Item>
                                    </ListGroup>
                                </div>
                            </Row>
                        </Col>
                        <Col xs={8} md={9} lg={9}>
                            <div className="user-info d-flex justify-content-between">
                                <h3>My Reviews</h3>
                            </div>
                            <div className='user-activity'>
                                {
                                    reviews.map((review, index) => {
                                        return <MyreviewCard key={index}
                                            image={review.image}
                                            name={review.name}
                                            review={review.review}
                                            rating={review.rating}
                                            date={review.date} />

                                    })
                                }

                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Footer />
        </div>
    )
}

export default Wishlist;
