import React from 'react';
import CustomNavbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { Container, Row, Col, Form } from 'react-bootstrap';
import FloatWmargin from '../Components/FloatWmargin';
import Card from 'react-bootstrap/Card';
import OrderSummary from '../Components/OrderSummary';

const CheckoutPage = () => {
    return (
        <div>
            <CustomNavbar />
            <Container>
                <Row>
                    <div style={{ marginTop: '20px', marginBottom: '20px' }}>
                        <FloatWmargin>
                            <h3 className="d-flex justify-content-center">Check out page</h3>
                        </FloatWmargin>
                    </div>
                    <Col md={8} style={{ paddingTop: '10px'  }}>
                        <Card style={{backgroundColor:'#ffffe4'}}>
                            <Card.Body>

                                <h4 >Shipping Address</h4>
                                <hr/>
                                <Form>
                                    <Row className="mb-3">
                                        <Form.Group as={Col} md={6}>
                                            <Form.Label>Name</Form.Label>
                                            <Form.Control type="text" placeholder="Enter name" />
                                        </Form.Group>
                                    </Row>
                                    <Row className="mb-3">
                                        <Form.Group as={Col} md={6}>
                                            <Form.Label>Phone</Form.Label>
                                            <Form.Control type="text" placeholder="Enter phone" />
                                        </Form.Group>
                                        <Form.Group as={Col} md={6}>
                                            <Form.Label>Phone 2</Form.Label>
                                            <Form.Control type="text" placeholder="Enter phone 2" />
                                        </Form.Group>
                                    </Row>
                                    <Row className="mb-3">
                                        <Form.Group as={Col}>
                                            <Form.Label>Address</Form.Label>
                                            <Form.Control type="text" placeholder="Enter address" />
                                        </Form.Group>
                                    </Row>
                                </Form>
                            </Card.Body>
                        </Card>
                        <div className="user-info d-flex justify-content-between">
                            <h4>Confirm your order</h4>
                            <a className="btn btn-warning ms-2" href="/my-section/profile/edit">
                                <i className="bi bi-pencil-square"></i>
                                Confirm Order
                            </a>
                        </div>
                    </Col>
                    <Col md={4} style={{ paddingTop: '20px' }}>
                        <OrderSummary   />
                    </Col>
                </Row>
            </Container>
            <Footer />
        </div>
    );
};

export default CheckoutPage;
