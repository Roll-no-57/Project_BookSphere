import React from 'react';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function AuthorCard(props) {
    const { image, name } = props;

    return (
        <Card style={{ padding: '20px', marginRight: '20px', marginTop: '10px' }}>
            <Container fluid className="text-center">
                <div className='ring' style={{ border: '3px solid blue', borderRadius: '50%', display: 'inline-block', padding: '5px' }}>
                    <Image src={image} roundedCircle className="img-fluid" style={{ width: '180px', height: '135px' }} />
                </div>
                <Card.Text className="mt-3">{name}</Card.Text>
                <Button variant="warning" size="md" href="/author">View Profile</Button>
            </Container>
        </Card>
    );
}

export default AuthorCard;
