import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const MyorderCard = (props) => {
    const {id, date, book} = props;
    return (
        <div style={{margin:'10px', width:'31%'}}>
            <Card>
                <Card.Body>
                    <h4> Your Order ID : {id}</h4>
                    <hr/>
                    <Button style={{marginRight:'20px'}} variant="outline-primary" disabled>Processing</Button>
                    <Button variant="outline-warning" >Track Order</Button>
                    <hr/>
                    <h5>Order Date : {date}</h5>
                    <hr/>
                    <h5>Price : {book.price}</h5>
                    <h5>Items : 3</h5>
                </Card.Body>
            </Card>
        </div>
    )
}

export default MyorderCard;
