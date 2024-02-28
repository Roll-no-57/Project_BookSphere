import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import { useState, useEffect } from 'react';
import { getUser } from '../Pages/API';

import { RiShoppingCart2Line } from "react-icons/ri";

const CustomNavbar = () => {

    const [user, setUser] = useState();

    const fetchUser = async () => {
        try {
            const response = await getUser();
            setUser(response.user);
        } catch (error) {
            console.error('User fetch failed:', error);
        }
    }


    useEffect(() => {
        fetchUser();
    }, []);



    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Navbar expand="lg" className="bg-body-tertiary shadow-lg pt-50 rounded " style={{ borderRadius: '10px' }} >
                <Container fluid>
                    <Navbar.Brand as={Link} to="/home" >
                        <img
                            src="/images/logo.png"
                            alt="Logo"
                            height="30"
                            className="d-inline-block align-top"
                        />{'  '}
                        BookSphere
                    </Navbar.Brand>
                    {/* Rest of the Navbar content */}

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="">

                            <Nav.Link as={Link} to="/book" className="me-4">Books</Nav.Link>
                            <Nav.Link as={Link} to="/author" className="me-4">Authors</Nav.Link>
                            <Nav.Link as={Link} to="/category" className="me-4">Categories</Nav.Link>
                            {/* <Nav.Link href="/author" className="me-4">About us</Nav.Link> */}
                            {/* <Nav.Link href="" className="me-4">Publisher</Nav.Link> */}
                            <Nav.Link as={Link} to="/publisher" className="me-4">Publishers</Nav.Link>
                            <Nav.Link as={Link} to="/about-us" className="me-4">About Us</Nav.Link>
                            <div style={{marginTop:'5px'}}>

                                <Form className="d-flex mx-auto justify-content-center">
                                    <Form.Control
                                        type="search"
                                        placeholder="Search"
                                        className="me-1"
                                        aria-label="Search"
                                        style={{ width: '350px' }} // Set width here
                                    />
                                    <Button className='me-4' variant="outline-success">Search</Button>
                                </Form>
                            </div>
                            {/*add icons */}
                            <Nav.Link href="/my-section/cart"><RiShoppingCart2Line style={{ fontSize: '1.8rem', marginRight: '25px' }} /></Nav.Link> {/* Add cart icon */}

                            <Dropdown>
                                <Dropdown.Toggle variant='success'>
                                    <img
                                        src={user?.IMAGE || '/default-profile-image.jpg'} // Use a default image if user.IMAGE is not available
                                        alt="Profile"
                                        height="35"
                                        className="rounded-circle"
                                        style={{ marginRight: '5px' }}
                                    />
                                    {user?.NAME || 'Loading...'} {/* Display "Loading..." while user data is being fetched */}
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href='/my-section/profile'>My Profile</Dropdown.Item>
                                    <Dropdown.Item href='/my-section/cart'>My Cart</Dropdown.Item>
                                    <Dropdown.Item href='/my-section/wishlist'>My wishlist</Dropdown.Item>
                                    <Dropdown.Item href='/my-section/orders'>My Orders</Dropdown.Item>
                                    <Dropdown.Item href='/my-section/reviews'>My ratings and reviews</Dropdown.Item>
                                    <Dropdown.Divider />
                                    <Dropdown.Item href='/'>Sign Out</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            {/* <Button variant="primary">Login</Button> */}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default CustomNavbar;

