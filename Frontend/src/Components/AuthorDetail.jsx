import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

const AuthorDetail = () => {

   let [follow, setFollow] = useState('Follow');
   let [variant, setVariant] = useState('primary');

    const handleClick = () => {
        console.log('clicked');

        if(follow === 'Following' && variant === 'danger'){
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
                <Row className="align-items-center justify-content-center">
                    <Col md={5} style={{ padding: '40px', justifyContent:'center'}} className="d-flex flex-column ">
                        <div className='author-image' style={{marginBottom:'20px'}}>
                            <img src='https://bit.ly/dan-abramov' alt='author' style={{ borderRadius: '10px',marginBottom:'10px' }} />
                            <h5>1.1k followers</h5>
                            <Button variant={variant} onClick={handleClick}>{follow}</Button>
                        </div>
                    </Col>
                    <Col md={6} style={{ padding: '60px' }} className="d-flex flex-column">
                        <div className='author-details'>
                            <h2>Apurbo Hossain</h2>
                            <p style={{ marginTop: '40px' }}>Apurbo Hossain is a software engineer and a writer. He has written many books and articles on various topics. He is also a regular contributor to many popular blogs and websites. He is currently working as a software engineer at a reputed company in Bangladesh.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default AuthorDetail;
