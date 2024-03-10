import React, { useEffect } from 'react'
import CustomNavbar from '../Components/Navbar'
import Table from 'react-bootstrap/Table'
import Card from 'react-bootstrap/Card'
// import { Button } from 'bootstrap'
import { Row, Col } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import { getAllAuthors } from './API'

const Authors = () => {

    const [author, setAuthor] = React.useState([]);

    const fetchAuthor = async () => {
        const response = await getAllAuthors();
        setAuthor(response.authors);
    }

    useEffect(() => {
        fetchAuthor();
    }, []);

    return (
        <div>
            <CustomNavbar />

            <div style={{ marginBottom: '20px', margin: '30px' }}>

                <Card style={{ backgroundColor: '#ffffe4' }}>
                    <Row>
                        <Col md={10}>
                            <Card.Body >
                                <Card.Title>All Authors</Card.Title>
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
                            {/* <th style={{ backgroundColor: '#ffffe4' }}>EMAIL</th> */}
                            {/* <th style={{ backgroundColor: '#ffffe4' }}>PHONE</th> */}
                            {/* <th style={{ backgroundColor: '#ffffe4' }}>CART_ID</th> */}
                        </tr>
                    </thead>
                    {
                        author.map((user, index) => {
                            return (
                                <tbody >
                                    <tr>
                                        <td style={{ backgroundColor: '#ffffe4' }}>{user.ID}</td>
                                        <td style={{ backgroundColor: '#ffffe4' }}>
                                            <img src={user.IMAGE} alt="user" style={{ width: '50px', height: '50px' }} />
                                        </td>
                                        <td style={{ backgroundColor: '#ffffe4' }}>{user.NAME}</td>
                                        {/* <td style={{ backgroundColor: '#ffffe4' }}>{user.EMAIL}</td>
                                        <td style={{ backgroundColor: '#ffffe4' }}>{user.PHONE}</td>
                                        <td style={{ backgroundColor: '#ffffe4' }}>{user.CART_ID}</td> */}
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

export default Authors