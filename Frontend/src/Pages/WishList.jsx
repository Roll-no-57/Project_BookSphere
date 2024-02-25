import React, { useState,useEffect } from 'react';
import CustomNavbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import './User.css';
import Container from 'react-bootstrap/Container';
import 'react-datepicker/dist/react-datepicker.css';
import WishCard from '../Components/wishCard'; // Capitalized the component name
import { getWishlistByUserID, deleteBookFromWishlist } from './API';

const Wishlist = () => {
    

    const [products, setProducts] = useState([]);

    const fetchWishList = async () => {
        const response = await getWishlistByUserID();
        setProducts(response.wishlist);
    }

    useEffect(() => {
        fetchWishList();
    }, []);

    const removeFromWishlist = async (bookID) => {
        await deleteBookFromWishlist(bookID);
        fetchWishList();
    }


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
                                <h3>My Wishlist</h3>
                            </div>
                            <div className='user-activity'>
                                <WishCard removeFromWishlist={removeFromWishlist} products={products} />
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
