import React, { useState } from 'react';
import { Card, Form, Button, Row, Col } from 'react-bootstrap';

const OrderSummary = () => {
    const [voucher, setVoucher] = useState('');
    const [totalPrice, setTotalPrice] = useState(0);
    const [subtotal, setSubtotal] = useState(0);
    const [shipping, setShipping] = useState(0);

    const [totalPayable, setTotalPayable] = useState(0);
    const [total, setTotal] = useState(0);

    const applyVoucher = () => {
        // Logic to apply voucher and update prices
        // This is just a placeholder
        setTotalPrice(totalPrice - 10);
        setVoucher('');
    };

    return (
        <Card style={{backgroundColor:'#ffffe4'}}>
            <Card.Body>
                <h4>Checkout Summary</h4>
                <hr />
                <Row className="mb-3">
                    <Col md={6}>
                        <p>Subtotal</p>
                    </Col>
                    <Col md={6}>
                        <p>Tk. {subtotal}</p>
                    </Col>
                </Row>
                <Row className="mb-3">
                    <Col md={6}>
                        <p>Shipping</p>
                    </Col>
                    <Col md={6}>
                        <p>Tk. {shipping}</p>
                    </Col>
                </Row>
                <Row className="mb-3">
                    <Col md={6}>
                        <p>Total</p>
                    </Col>
                    <Col md={6}>
                        <p>Tk. {total}</p>
                    </Col>
                </Row>
                <Row className="mb-3">
                    <Col md={6}>
                        <p>Total Payable</p>
                    </Col>
                    <Col md={6}>
                        <p>Tk. {totalPayable}</p>
                    </Col>
                </Row>
                <hr />
                <Row className="mb-3">
                    <Col md={8}>
                        <Form.Group>
                            <Form.Label>Enter the promo code or voucher</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter Voucher Code"
                                value={voucher}
                                onChange={(e) => setVoucher(e.target.value)}
                            />
                        </Form.Group>
                    </Col>
                    <Col md={4} style={{marginTop:'32px'}}>
                        <Button onClick={applyVoucher}>Apply</Button>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
};

export default OrderSummary;
