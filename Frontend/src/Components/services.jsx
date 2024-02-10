import React from 'react';
import { Card } from 'react-bootstrap';
import { RiMoneyDollarCircleFill, RiArrowGoBackFill, RiTruckFill, RiHandCoinFill } from 'react-icons/ri';

const Services = () => {
  return (
    <Card bg="light" text="dark" style={{ padding: '20px', marginBottom: '50px' }}>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '30px' }}>
        <RiMoneyDollarCircleFill size={30} style={{ marginRight: '10px' }} />
        <Card.Text>Cash on Delivery</Card.Text>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '30px' }}>
        <RiArrowGoBackFill size={30} style={{ marginRight: '10px' }} />
        <Card.Text>7 days Happy Return</Card.Text>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '30px' }}>
        <RiTruckFill size={30} style={{ marginRight: '10px' }} />
        <div>
          <Card.Text>Delivery Charge Tk. 50 (Online)</Card.Text>
          {/* <Card.Text>Tk. 50 (Online)</Card.Text> */}
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center'}}>
        <RiHandCoinFill size={30} style={{ marginRight: '10px' }} />
        <Card.Text>Purchase & Earn</Card.Text>
      </div>
    </Card>
  );
};

export default Services;
