import React from 'react';
import CartCard from '../Components/cartCard';
import { Container, Row, Col } from 'react-bootstrap';
import FloatWmargin from '../Components/FloatWmargin';
import CustomNavbar from '../Components/Navbar';
import Services from '../Components/services';
import Footer from '../Components/Footer';

const CartPage = (props) => {

    return (
        <div>
            <CustomNavbar />
            <Container>
                <Row>
                    <div style={{ marginTop: '20px', marginBottom: '20px' }}>

                        <FloatWmargin >
                            <h3 className="d-flex justify-content-center">My Cart</h3>
                        </FloatWmargin>
                    </div>
                    <Col md={8} style={{ paddingTop: '10px' }}>

                        <CartCard />
                        <CartCard />
                        <CartCard />
                        <CartCard />

                        <div className="user-info d-flex justify-content-between">

                            <h3>Proceed to checkout</h3>
                            <a class="btn btn-danger ms-2" href="/my-section/checkoutPage">
                                <i class="bi bi-pencil-square"></i>
                                Place Order
                            </a>
                        </div>

                    </Col>
                    <Col md={4} style={{ paddingTop: '20px' }}>
                        <Services />
                    </Col>
                </Row>
            </Container>
            <Footer />
        </div>
    );
};

export default CartPage;
