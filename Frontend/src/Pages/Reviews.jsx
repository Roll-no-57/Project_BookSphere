
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

import { useEffect } from 'react';
import { getReviewsByUserID } from './API';


const Reviews = () => {




    const [reviews, setReviews] = useState([]);

    const fetchReviews = async () => {
        try {
            const response = await getReviewsByUserID();
            setReviews(response.reviews);
        }
        catch (error) {
            console.error('Error fetching reviews:', error);
        }
    }

    useEffect(() => {
        fetchReviews();
    }, []);




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
                                            image={review.BOOK_IMAGE}
                                            name={review.BOOK_TITLE}
                                            review={review.REVIEW}
                                            rating={review.STARS}
                                            date={review.CREATED_AT} 
                                            book_id={review.BOOK_ID}/>

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

export default Reviews;
