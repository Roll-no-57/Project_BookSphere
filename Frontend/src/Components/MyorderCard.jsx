import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const MyorderCard = (props) => {

    const {id, book} = props;
    return (
        <div style={{margin:'10px', width:'31%'  }}>
            <Card style={{backgroundColor:'#ffffe4'}}>
                <Card.Body>
                    <h4> Your Order ID : {book.ID}</h4>
                    <hr/>
                    <Button style={{marginRight:'20px'}} variant="warning" disabled>{book.STATE}</Button>
                    {/* <Button variant="outline-warning" >Track Order</Button> */}
                    <hr/>
                    <h5>Order Date : {book.CREATED_AT}</h5>
                    <hr/>
                    <h5>Price : {book.TOTAL_PRICE}</h5>
                    <h5>Items : {book.TOTAL_ITEM}</h5>
                </Card.Body>
            </Card>
        </div>
    )
}

export default MyorderCard;
