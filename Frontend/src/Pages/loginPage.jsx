import React, { useRef } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { getLogin } from './API';
import { setItem } from './localStorage';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';
import Card from 'react-bootstrap/Card';

const Login = () => {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);



    const handleLogin = async (e) => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const user = {
            email: email,
            password: password
        }

        try {
            const result = await getLogin(user);
            if (result.token !== null) {
                setItem('authToken', result.token);
                toast.success("Successfully logged in! Now you can explore.");
                setTimeout(() => {
                    window.location.href = '/home';
                }, 2000);
            } else {
                // Show the error toast
                toast.error("Wrong credentials. Please try again.");
            }
        } catch (error) {
            // Show an error notification with react-bootstrap toast indicating API call failure
            console.error('Login failed:', error.message);
            // Show the error toast
            toast.error("Failed to login. Please try again later.");
        }
    }

    useEffect(() => {
        localStorage.removeItem('authToken');
    }, []);


    return (
        <Card style={{backgroundColor:'#ffffe4'}}>
            <Card.Body>
                <Container className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
                    <div className="p-4 shadow-lg rounded" style={{ width: '400px' }}>
                        <h2 className="text-center mb-4">Login</h2>
                        <Form onSubmit={handleLogin}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Enter email"
                                    ref={emailRef}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Password"
                                    ref={passwordRef}
                                />
                            </Form.Group>
                            <div className="d-flex justify-content-center">
                                <Button variant="success" type="submit" className="mb-3">
                                    Login
                                </Button>
                            </div>
                            <Row>
                                <Col>
                                    <p className="text-center">Don't have an account? <Link to="/registration">Sign up</Link></p>
                                </Col>
                            </Row>
                        </Form>
                        <ToastContainer position="top-right" autoClose={2000} />
                    </div>
                </Container>
            </Card.Body >
        </Card>
    );
};

export default Login;
