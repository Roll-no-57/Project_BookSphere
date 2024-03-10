import React from 'react'
import CustomNavbar from '../Components/Navbar'
import Table from 'react-bootstrap/Table'
import Card from 'react-bootstrap/Card'
import { Row, Col } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'

const Voucher = () => {

    const users = [
        {
            "ID": 14,
            "NAME": "Apurbo",
            "EMAIL": "2105057@gmail.com",
            "PASSWORD": "2105057",
            "ADDRESS": null,
            "PHONE": null,
            "DOB": null,
            "IMAGE": "/images/profile2.jpg",
            "CART_ID": null
        }
    ]

    return (
        <div>
            <CustomNavbar />

            <div style={{ marginBottom: '20px', margin: '30px' }}>

                <Card style={{ backgroundColor: '#ffffe4' }}>
                    <Row>
                        <Col md={10}>
                            <Card.Body >
                                <Card.Title>All Voucher</Card.Title>
                            </Card.Body>
                        </Col>
                        <Col>
                            <div style={{ marginTop: '12px' }}>

                                <Button variant="primary">
                                    <i class="bi bi-plus" style={{fontSize:'20px'}}></i>
                                    Add Book</Button>

                            </div>
                        </Col>

                    </Row>
                </Card>

            </div>

            <div style={{ margin: '30px' }}>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th style={{ backgroundColor: '#ffffe4' }}>ID</th>
                            <th style={{ backgroundColor: '#ffffe4' }}>IMAGE</th>
                            <th style={{ backgroundColor: '#ffffe4' }}>NAME</th>
                            <th style={{ backgroundColor: '#ffffe4' }}>EMAIL</th>
                            <th style={{ backgroundColor: '#ffffe4' }}>PHONE</th>
                            <th style={{ backgroundColor: '#ffffe4' }}>CART_ID</th>
                        </tr>
                    </thead>
                    {
                        users.map((user, index) => {
                            return (
                                <tbody >
                                    <tr>
                                        <td style={{ backgroundColor: '#ffffe4' }}>{user.ID}</td>
                                        <td style={{ backgroundColor: '#ffffe4' }}>
                                            <img src={user.IMAGE} alt="user" style={{ width: '50px', height: '50px' }} />
                                        </td>
                                        <td style={{ backgroundColor: '#ffffe4' }}>{user.NAME}</td>
                                        <td style={{ backgroundColor: '#ffffe4' }}>{user.EMAIL}</td>
                                        <td style={{ backgroundColor: '#ffffe4' }}>{user.PHONE}</td>
                                        <td style={{ backgroundColor: '#ffffe4' }}>{user.CART_ID}</td>
                                    </tr>

                                </tbody>
                            )
                        })
                    }
                </Table>
            </div>

        </div>
    )
}

export default Voucher