import React from 'react';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';

function AuthorCard(props) {
    const { image, name } = props;

    return (
        <Container className="text-center">
            <div className='ring' style={{ border: '3px solid blue', borderRadius: '50%', display: 'inline-block', padding: '5px' }}>
                <Image src={image} roundedCircle className="img-fluid" style={{ width: '180px', height: '180px' }} />
            </div>
            <Card.Text className="mt-3" >{name}</Card.Text>
        </Container>
    );
}

export default AuthorCard;
