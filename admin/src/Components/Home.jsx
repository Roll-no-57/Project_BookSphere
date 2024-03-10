import React from 'react';
import CustomNavbar from '../Components/Navbar';
import { Row, Col, Container } from 'react-bootstrap';
import FloatingDivWrapper from '../Components/FloatingDivWrapper';
import FloatWmargin from '../Components/FloatWmargin';

function Home() {

    const [totalSale, setTotalSale] = React.useState(0);

    



    return (
        <>
            <CustomNavbar />


            <Container>
                <Row>
                    <Col md={4} >
                        <Row>
                            <FloatingDivWrapper>
                                <Row>
                                    <Col md={8}>
                                        <h4>Total Sold Books on this month</h4>
                                        <h1>{totalSale}</h1>
                                    </Col>
                                    <Col>
                                        <i class="bi bi-calendar-month" style={{fontSize:'30px' ,color:'yellowgreen'}}></i>
                                    </Col>

                                </Row>
                            </FloatingDivWrapper>

                        </Row>
                        <Row>
                            <Col md={6}>
                                <FloatWmargin>
                                <Col md={8}>
                                        <h4>Total Sold Books on this month</h4>
                                        <h1>{totalSale}</h1>
                                    </Col>
                                    <Col>
                                        <i class="bi bi-calendar-month" style={{fontSize:'30px' ,color:'yellowgreen'}}></i>
                                    </Col>

                                </FloatWmargin>
                            </Col>
                            <Col md={6}>
                                <FloatWmargin>
                                <Col md={8}>
                                        <h4>Total Sold Books on this month</h4>
                                        <h1>{totalSale}</h1>
                                    </Col>
                                    <Col>
                                        <i class="bi bi-calendar-month" style={{fontSize:'30px' ,color:'yellowgreen'}}></i>
                                    </Col>
                                </FloatWmargin>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={8}>
                        <FloatingDivWrapper>

                        </FloatingDivWrapper>
                    </Col>
                </Row>
            </Container>


        </>
    );
}

export default Home;
