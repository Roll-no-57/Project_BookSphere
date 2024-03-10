import React from 'react'
import CustomNavbar from '../Components/Navbar'
import Table from 'react-bootstrap/Table'
import Card from 'react-bootstrap/Card'
import { getAllOrders } from './API'
import { useState, useEffect } from 'react'
import Form from 'react-bootstrap/Form';
import { UpdateState } from './API'
import Button from 'react-bootstrap/Button'

const Orders = () => {

    const [orders, setOrders] = useState([]);

    const fetchOrders = async () => {
        const response = await getAllOrders();
        setOrders(response.orders);
    }

    useEffect(() => {
        fetchOrders();
    }, []);


    const handleState = async (e, orderId) => {
        const newState = e.target.value;
        console.log(e);
        console.log(typeof (newState));
        await UpdateState(orderId, newState);
        // Update the state of the order with the new value
    };



    return (
        <div>
            <CustomNavbar />

            <div style={{ marginBottom: '20px', margin: '30px' }}>

                <Card style={{ backgroundColor: '#ffffe4' }}>
                    <Card.Body >
                        <Card.Title>User Orders</Card.Title>
                    </Card.Body>
                </Card>

            </div>

            <div style={{ margin: '30px' }}>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th style={{ backgroundColor: '#ffffe4' }}>ID</th>
                            <th style={{ backgroundColor: '#ffffe4' }}>VOUCHER_ID</th>
                            <th style={{ backgroundColor: '#ffffe4' }}>NAME</th>
                            <th style={{ backgroundColor: '#ffffe4' }}>PHONE1</th>
                            {/* <th style={{ backgroundColor: '#ffffe4' }}>PHONE2</th> */}
                            <th style={{ backgroundColor: '#ffffe4' }}>CART_ID</th>
                            <th style={{ backgroundColor: '#ffffe4' }}>TOTAL_PRICE</th>
                            <th style={{ backgroundColor: '#ffffe4' }}>STATE</th>
                            {/* <th style={{ backgroundColor: '#ffffe4' }}>UPDATE</th> */}

                        </tr>
                    </thead>
                    {
                        orders.map((user, index) => {
                            return (
                                <tbody >
                                    <tr>
                                        <td style={{ backgroundColor: '#ffffe4' }}>{user.ID}</td>
                                        <td style={{ backgroundColor: '#ffffe4' }}>{user.VOUCHER_ID}</td>
                                        <td style={{ backgroundColor: '#ffffe4' }}>{user.NAME}</td>
                                        <td style={{ backgroundColor: '#ffffe4' }}>{user.PHONE1}</td>
                                        <td style={{ backgroundColor: '#ffffe4' }}>{user.CART_ID}</td>
                                        <td style={{ backgroundColor: '#ffffe4' }}>{user.TOTAL_PRICE}</td>
                                        <td style={{ backgroundColor: '#ffffe4' }}>
                                            <Form.Select aria-label="Default select example" style={{ width: '200px', backgroundColor: '#ffffe4' }} onChange={(e) => handleState(e, user.ID)}>
                                                <option value="placed" selected={user.STATE === "placed"}>Placed</option>
                                                <option value="confirmed" selected={user.STATE === "confirmed"}>Confirmed</option>
                                                <option value="processing" selected={user.STATE === "processing"}>Processing</option>
                                                <option value="delivered" selected={user.STATE === "delivered"}>Delivered</option>
                                            </Form.Select>
                                        </td>
                                        {/* <td style={{ backgroundColor: '#ffffe4' }}>
                                            <Button variant='secondary' onclick={handleState}> update </Button>
                                        </td> */}
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

export default Orders