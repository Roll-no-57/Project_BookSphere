import React, { useState } from 'react';
import CustomNavbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import './User.css';
import Container from 'react-bootstrap/Container';
import 'react-datepicker/dist/react-datepicker.css';
import MyOrderCard from '../Components/MyorderCard'; // Capitalized the component name


const MyOrders = () => {
    const products = [
        { id: 1, name: 'Product 1', author: 'Apurbo Hossain', price: '$10.00', image: '/images/book1.jpg' },
        { id: 2, name: 'Product 2', author: 'Apurbo Hossain', price: '$15.00', image: '/images/book2.jpg' },
        { id: 3, name: 'Product 3', author: 'Apurbo Hossain', price: '$20.00', image: '/images/book1.jpg' },
        { id: 4, name: 'Product 4', author: 'Apurbo Hossain', price: '$25.00', image: '/images/book1.jpg' },
        { id: 2, name: 'Product 2', author: 'Apurbo Hossain', price: '$15.00', image: '/images/book2.jpg' },
        { id: 2, name: 'Product 2', author: 'Apurbo Hossain', price: '$15.00', image: '/images/book2.jpg' },
        { id: 5, name: 'Product 5', author: 'Apurbo Hossain', price: '$30.00', image: '/images/book1.jpg' },
        { id: 2, name: 'Product 2', author: 'Apurbo Hossain', price: '$15.00', image: '/images/book2.jpg' },
        { id: 2, name: 'Product 2', author: 'Apurbo Hossain', price: '$15.00', image: '/images/book2.jpg' },
        { id: 2, name: 'Product 2', author: 'Apurbo Hossain', price: '$15.00', image: '/images/book2.jpg' },
    ];

    const headlines = "helo";
    const headTitle = "helo";

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
                                <h3>My Orders</h3>
                            </div>
                            <div className='user-activity d-flex flex-wrap'>
                                {products.map((book, index) => (
                                    <MyOrderCard
                                        key={index}
                                        book={book}
                                        index={index}
                                        id={index + 1}
                                        date="12/12/2021"
                                    />
                                ))}
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Footer />
        </div>
    )
}

export default MyOrders;
