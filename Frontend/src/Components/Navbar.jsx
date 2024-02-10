import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
// import { RiShoppingCart2Line } from "react-icons/ri";
import { RiShoppingCart2Line, RiHeartLine, RiUserLine } from "react-icons/ri";


const CustomNavbar = () => {
    return (
        <div >
            <Navbar expand="lg" className="bg-body-tertiary shadow-lg pt-50  " >
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            src="/images/logo.png"
                            alt="Logo"
                            height="30"
                            className="d-inline-block align-top"
                        />{'  '}
                        React-Bootstrap
                    </Navbar.Brand>
                    {/* Rest of the Navbar content */}

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="">

                            <Nav.Link href="#books" className="me-4">Books</Nav.Link>
                            <Nav.Link href="#home" className="me-4">Authors</Nav.Link>
                            <Nav.Link href="#link" className="me-4">Publisher</Nav.Link>
                            <Nav.Link href="#AboutUs" className="me-4">About us</Nav.Link>

                            <Form className="d-flex mx-auto justify-content-center">
                                <Form.Control
                                    type="search"
                                    placeholder="Search"
                                    className="me-1"
                                    aria-label="Search"
                                    style={{ width: '350px' }} // Set width here
                                />
                                <Button className='me-5' variant="outline-success">Search</Button>
                            </Form>
                            {/*add icons */}
                            <Nav.Link href="#cart"><RiShoppingCart2Line style={{ fontSize: '1.7rem' }} /></Nav.Link> {/* Add cart icon */}
                            <Nav.Link href="#wishlist"><RiHeartLine style={{ fontSize: '1.7rem' }} /></Nav.Link> {/* Add wishlist icon */}
                            <Nav.Link href="#profile" className='me-2'><RiUserLine style={{ fontSize: '1.7rem' }} /></Nav.Link> {/* Add profile icon */}
                            <Button variant="primary">Login</Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default CustomNavbar;

