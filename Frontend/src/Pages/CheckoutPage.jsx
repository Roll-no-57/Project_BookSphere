import React from 'react';
import CustomNavbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { Container, Row, Col, Form } from 'react-bootstrap';
import FloatWmargin from '../Components/FloatWmargin';
import Card from 'react-bootstrap/Card';
import OrderSummary from '../Components/OrderSummary';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState, useEffect } from 'react';
import { ConfirmOrder } from './API';

const CheckoutPage = () => {

    const [voucherID, setVoucherID] = useState(null);
    const [name, setName] = useState(null);
    const [phone1, setPhone1] = useState(null);
    const [phone2, setPhone2] = useState(null);
    const [address, setAddress] = useState(null);

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handlePhone1Change = (event) => {
        setPhone1(event.target.value);
    };
    const handlePhone2Change = (event) => {
        setPhone2(event.target.value);
    };
    const handleAddressChange = (event) => {
        setAddress(event.target.value);
    };


    const handleConfirmOrder = () => {

        if (name === null || phone1 === null || address === null) {
            toast.error("Please fill all the fields");

        }
        else {
            const data = {
                voucherID: voucherID,
                name: name,
                phone1: phone1,
                phone2: phone2,
                address: address,
                state: "placed",
                payment_method: "cash on delivery"
            }
            console.log(data);
            ConfirmOrder(data);
            toast.success("Order confirmed! You will be notified soon.");

        }

    }


    const voucherApplied = (voucher) => {
        setVoucherID(voucher);
    }




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
                    <Col md={8} style={{ paddingTop: '10px' }}>
                        <Card style={{ backgroundColor: '#ffffe4' }}>
                            <Card.Body>

                                <h4 >Shipping Address</h4>
                                <hr />
                                <Form>
                                    <Row className="mb-3">
                                        <Form.Group as={Col} md={6}>
                                            <Form.Label>Name</Form.Label>
                                            <Form.Control type="text" placeholder="Enter name" 
                                            value={name}
                                            onChange={handleNameChange}
                                            />
                                        </Form.Group>
                                    </Row>
                                    <Row className="mb-3">
                                        <Form.Group as={Col} md={6}>
                                            <Form.Label>Phone</Form.Label>
                                            <Form.Control type="text" placeholder="Enter phone"
                                            value={phone1}
                                            onChange={handlePhone1Change}
                                            />
                                        </Form.Group>
                                        <Form.Group as={Col} md={6}>
                                            <Form.Label>Phone 2</Form.Label>
                                            <Form.Control type="text" placeholder="Enter phone 2" 
                                            value={phone2}
                                            onChange={handlePhone2Change}
                                            />
                                        </Form.Group>
                                    </Row>
                                    <Row className="mb-3">
                                        <Form.Group as={Col}>
                                            <Form.Label>Address</Form.Label>
                                            <Form.Control type="text" placeholder="Enter address"
                                            value={address}
                                            onChange={handleAddressChange}
                                            />
                                        </Form.Group>
                                    </Row>
                                </Form>
                            </Card.Body>
                        </Card>
                        <div className="user-info d-flex justify-content-between">
                            <h4>Confirm your order</h4>
                            <a className="btn btn-warning ms-2"  onClick={handleConfirmOrder}>
                                <i className="bi bi-pencil-square"></i>
                                Confirm Order
                            </a>
                        </div>
                    </Col>
                    <Col md={4} style={{ paddingTop: '20px' }}>
                        <OrderSummary voucherApplied={voucherApplied}/>
                    </Col>
                </Row>
                <ToastContainer position="top-right" autoClose={2000} />
            </Container>
            <Footer />
        </div>
    );
};

export default CheckoutPage;
