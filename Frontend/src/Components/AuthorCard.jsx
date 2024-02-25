import React from 'react';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

function AuthorCard(props) {

    const { IMAGE, NAME, ID ,link} = props; // Assuming you have an id property in the props

    const path ="/"+ link +"/"+ ID; // Assuming you have a path property in the props

    return (
        <Card style={{ padding: '20px', marginRight: '20px', marginTop: '10px' ,marginBottom:'10px' }}>
            <Container fluid className="text-center">
                <div className='ring' style={{ border: '3px solid blue', borderRadius: '50%', display: 'inline-block', padding: '5px' }}>
                    <Image src={IMAGE} roundedCircle className="img-fluid" style={{ width: '140px', height: '135px' }} />
                </div>
                <Card.Text className="mt-3">{NAME}</Card.Text>
                {/* Use Link component instead of Button */}
                <Link to={path} className="btn btn-warning btn-md">View Profile</Link>
            </Container>
        </Card>
    );
}

export default AuthorCard;
