import React, { useRef } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { getRegister } from './API';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {
    const usernameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const handleSignup = async (e) => {
        e.preventDefault();
        const username = usernameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        
        const user = {
            name: username,
            email: email,
            password: password
        }

        try {
            const result = await getRegister(user);
            if (result.user_id !== null) {
                toast.success("Successfully signed up! Now you can log in.");
                setTimeout(() => {
                    window.location.href = '/';
                }, 2000);
            } else {
                toast.error("Failed to sign up. Please try again later.");
            }
        } catch (error) {
            console.error("Error during signup:", error);
            toast.error("Failed to sign up. Please try again later.");
        }
    }

    return (
        <Container className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
            <div className="p-4 shadow-lg rounded" style={{ width: '400px' }}>
                <h2 className="text-center mb-4">Sign Up</h2>
                <Form onSubmit={handleSignup}>
                    <Form.Group className="mb-3" controlId="formBasicUsername">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" placeholder="Enter username" ref={usernameRef} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" ref={emailRef} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" ref={passwordRef} />
                    </Form.Group>

                    <div className="d-flex justify-content-center">
                        <Button variant="primary" type="submit" className="mb-3">
                            Sign Up
                        </Button>
                    </div>

                    <Row>
                        <Col>
                            <p className="text-center">Already have an account? <Link to="/">Login</Link></p>
                        </Col>
                    </Row>
                </Form>
                <ToastContainer position="top-right" autoClose={2000} />
            </div>
        </Container>
    );
};

export default Signup;
