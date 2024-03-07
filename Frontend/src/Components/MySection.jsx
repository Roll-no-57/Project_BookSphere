import CustomNavbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import '../Pages/User.css';
import Container from 'react-bootstrap/Container';
import { useState, useEffect } from 'react';

import { getUser } from '../Pages/API';



const MySection = (props) => {

    const { link, component: CustomCard } = props;

    const [user, setUser] = useState();

    const fetchUser = async () => {
        try {
            const response = await getUser();
            setUser(response.user);
        } catch (error) {
            console.error('User fetch failed:', error);
        }
    }

    useEffect(() => {
        fetchUser();
    }, []);


    return (
        <div>
            <CustomNavbar />

            <div style={{ display: 'flex', justifyContent: 'center', marginLeft: '80px' }}>
                <Container fluid>
                    <Row>

                        {/* This is the first column which will not change */}
                        <Col style={{ width: '20%', marginRight: '10px' }} xs={4} md={3} lg={2}>

                            {/* This is the user profile section */}
                            <Row>

                                <div className='user-profile'>
                                    <Row>
                                        <Col>
                                            <img
                                                src={user?.IMAGE || '/default-profile-image.jpg'}
                                                alt="Profile"
                                                height="90"
                                                className="rounded"
                                                style={{ marginRight: '5px' }}
                                            />
                                        </Col>
                                        <Col>
                                            <h5>Hello,</h5>
                                            <h4>{user?.NAME || 'Loading...'}</h4>
                                        </Col>
                                    </Row>
                                </div>

                            </Row>

                            {/* This is the user actions section */}
                            <Row>
                                <div className='user-Actions'>
                                    <ListGroup variant="flush">
                                        <ListGroup.Item action href="/my-section/profile" active={link === 'profile'}>
                                            My Account
                                        </ListGroup.Item>
                                        <ListGroup.Item action href="/my-section/orders" active={link === 'orders'}>
                                            My Orders
                                        </ListGroup.Item>
                                        <ListGroup.Item action href="/my-section/cart" active={link === 'cart'}>
                                            My Cart
                                        </ListGroup.Item>
                                        <ListGroup.Item action href="/my-section/wishlist" active={link === 'wishlist'}>
                                            My Wishlist
                                        </ListGroup.Item>
                                        <ListGroup.Item action href="/my-section/reviews" active={link === 'reviews'}>
                                            My Ratings and Reviews
                                        </ListGroup.Item>
                                    </ListGroup>
                                </div>
                            </Row>
                        </Col>

                        {/* This is the second column which will change we will pass components to it  */}

                        <Col xs={8} md={9} lg={9}>
                            <div className="user-info d-flex justify-content-between">
                                <h3>My {link}</h3>
                            </div>
                            <div className='user-activity'>
                                {/* Changed the component name */}
                                <CustomCard />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Footer />
        </div>
    )
}

export default MySection;
