import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const AuthorDetail = () => {
    return (
        <div>
            <Container fluid>
                <Row>
                    <col md={3} style={{ padding: '40px' }} className="d-flex flex-column">
                        <div className='author-image'>
                            <img src='https://bit.ly/dan-abramov' alt='author' style={{ borderRadius: '10px' }} />
                        </div>
                    </col>
                    <col md={3} style={{ padding: '20px' }} className="d-flex flex-column">
                        <div className='author-details'>
                            <h2>Apurbo Hossain</h2>
                            <h3 style={{ marginTop: '40px' }}>About the Author</h3>
                            <p style={{ marginTop: '40px' }}>Apurbo Hossain is a software engineer and a writer. He has written many books and articles on various topics. He is also a regular contributor to many popular blogs and websites. He is currently working as a software engineer at a reputed company in Bangladesh.</p>
                        </div>
                    </col>
                </Row>
            </Container>
        </div>
    )
}

export default AuthorDetail