import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

const AuthorDetail = (props) => {
    // Destructure the props object to get the author details
    const { name, image, followers, description } = props;

    // State for the follow button
    const [follow, setFollow] = useState('Follow');
    const [variant, setVariant] = useState('primary');

    // Function to handle the follow button click
    const handleClick = () => {
        if (follow === 'Following' && variant === 'danger') {
            setFollow('Follow');
            setVariant('primary');
            return;
        }
        setFollow('Following');
        setVariant('danger');
    };

    return (
        <div>
            <Container fluid>
                <Row className="">
                    <Col md={5} style={{ padding: '20px' }}>
                        <div className='author-image' style={{ marginBottom: '20px', padding: '20px' }}>
                            <img src={image} alt='author' style={{ borderRadius: '10px', marginTop: '10px' }} />
                            <div style={{ padding: '10px' }}>
                                <h5>{followers} followers</h5>
                            </div>
                            <div style={{ padding: '10px' }}>
                                <Button variant={variant} onClick={handleClick}>{follow}</Button>
                            </div>
                        </div>
                    </Col>
                    <Col md={6} style={{ padding: '30px' }} className="d-flex flex-column">
                        <div className='author-details'>
                            <h2>{name}</h2>
                            <p style={{ marginTop: '10px' }}>{description}</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default AuthorDetail;
