import React, { useState } from 'react';
import CustomNavbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import './User.css';
import Container from 'react-bootstrap/Container';
import { Form } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';



const User = () => {
    const [dateOfBirth, setDateOfBirth] = useState(null);

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
                                    <ListGroup variant="flush" style={{backgroundColor:'#ffffe4'}}>
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

                                <h3>Profile</h3>
                                <a class="btn btn-outline-warning ms-2" href="/my-section/profile/edit">
                                    <i class="bi bi-pencil-square"></i>
                                    Edit Profile
                                </a>
                            </div>

                            <div className='user-activity'>
                                <h3>Profile Information</h3>
                                <hr />
                                <Form>
                                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                                        <Form.Label column sm={2}>
                                            Full Name
                                        </Form.Label>
                                        <Col sm={10}>
                                            <Form.Control type="email" placeholder="Name" />
                                        </Col>
                                    </Form.Group>

                                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                                        <Form.Label column sm={2}>
                                            Date of Birth
                                        </Form.Label>
                                        <Col sm={10}>
                                            <DatePicker
                                                selected={dateOfBirth}
                                                onChange={(date) => setDateOfBirth(date)}
                                                placeholderText="Select Date"
                                                dateFormat="MM/dd/yyyy"
                                            />
                                        </Col>
                                    </Form.Group>
                                </Form>
                                <hr />
                                {/*Contact information*/}

                                <Form>
                                    <h3>Contact Information</h3>
                                    <hr />
                                    <Row>

                                        <Col>
                                            <Form.Label column sm={2}>
                                                Phone
                                            </Form.Label>
                                            <Form.Control placeholder="First name" />
                                        </Col>
                                        <Col>
                                            <Form.Label column sm={2}>
                                                Email
                                            </Form.Label>
                                            <Form.Control placeholder="Last name" />
                                        </Col>
                                    </Row>
                                    <hr />
                                </Form>
                                {/*Profile pic */}
                                <div>

                                    <h3>Profile Picture</h3>
                                    <hr />

                                    <Form.Group className="position-relative mb-3">
                                        <Form.Label>Picture</Form.Label>
                                        <Form.Control
                                            type="file"
                                            required
                                            name="Choose Profile Picture"
                                        />
                                    </Form.Group>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            <Footer />
        </div>
    )
}

export default User;
