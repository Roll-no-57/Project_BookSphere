import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import { useState, useEffect } from 'react';
import { getUser } from '../Pages/API';



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
        // <div style={{ display: 'flex', justifyContent: 'center', backgroundColor:'#ffffe4'}}>
        <Navbar expand="lg" className="bg-offwhite shadow-lg pt-50 rounded" style={{ borderRadius: '10px' }}>
            <Container fluid>
                <Navbar.Brand as={Link} to="/home" style={{ marginLeft: '90px', marginRight: '50px' }}>
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

                        <Nav.Link as={Link} to="/orders" className="me-5">Orders</Nav.Link>
                        <Nav.Link as={Link} to="/book" className="me-5">Books</Nav.Link>
                        <Nav.Link as={Link} to="/author" className="me-5">Authors</Nav.Link>
                        {/* <Nav.Link as={Link} to="/publisher" className="me-5">Publishers</Nav.Link> */}
                        {/* <Nav.Link as={Link} to="/category" className="me-5">Voucher</Nav.Link> */}


                        <Dropdown style={{ marginLeft: '450px' }}>
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
                                <Dropdown.Item href='/'>Sign Out</Dropdown.Item>
                            </Dropdown.Menu>


                        </Dropdown>
                        {/* <Button variant="primary">Login</Button> */}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        // </div>
    );
};

export default CustomNavbar;

