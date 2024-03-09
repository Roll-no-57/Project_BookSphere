import React, { useState, useEffect } from 'react';
import { Card, Form, Button, Row, Col } from 'react-bootstrap';
import { getUserPickedBooks, getValidVoucher } from '../Pages/API';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const OrderSummary = (props) => {
    const [voucher, setVoucher] = useState('');
    const [totalPrice, setTotalPrice] = useState(0);
    const [subtotal, setSubtotal] = useState(0);
    const [shipping, setShipping] = useState(0);

    const [totalPayable, setTotalPayable] = useState(0);
    const [total, setTotal] = useState(0);
    const [books, setBooks] = useState([]);

    const [isVoucherApplied, setIsVoucherApplied] = useState(false);


    useEffect(() => {
        const fetchBooks = async () => {
            const response = await getUserPickedBooks();
            setBooks(response.picked);

            let motTaka = 0;
            response.picked.forEach((book) => {
                motTaka += book.PRICE * book.AMOUNT;
            });

            setTotalPrice(motTaka);
            setSubtotal(motTaka);
            setShipping(50);
            setTotal(motTaka + 50);
            setTotalPayable(motTaka + 50);
        };

        fetchBooks();
    }, []);

    const applyVoucher = async () => {
        if (voucher !== '') {

            const response = await getValidVoucher(voucher);

            if (response.length === 0) {
                toast.error("Invalid Voucher");
            }
            else {

                const validityDate = new Date(response[0].VALIDITY);

                console.log("validity ");
                console.log(validityDate);
                console.log(new Date());
                console.log(response[0].CAP, totalPayable, validityDate < new Date());

                if (response[0].CAP > totalPayable || validityDate < new Date()) {
                    toast.error("Voucher not applicable");
                }
                else {
                    // if (!isVoucherApplied) {
                        setTotalPayable(totalPayable - (subtotal * response[0].DISCOUNT / 100));
                        setVoucher('');
                        props.voucherApplied(response[0].ID);
                        // setIsVoucherApplied(true);
                        // toast.success("Voucher applied");
                    // }
                    // else {
                    //     toast.error("You have already applied a voucher");
                    // }
                }
            }
        }
        else {
            toast.error("Please enter a voucher code");
        }
    };

    return (
        <Card style={{ backgroundColor: '#ffffe4' }}>
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
                    <Col md={4} style={{ marginTop: '55px' }}>
                        <Button onClick={applyVoucher}>Apply</Button>
                    </Col>
                </Row>
                <ToastContainer position="top-right" autoClose={2000} />

            </Card.Body>
        </Card>
    );
};

export default OrderSummary;
