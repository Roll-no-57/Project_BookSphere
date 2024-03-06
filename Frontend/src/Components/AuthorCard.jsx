import React from 'react';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './AuthorCard.css'; // Import CSS file
import Button from 'react-bootstrap/Button';


function AuthorCard(props) {

    const { IMAGE, NAME, ID, link } = props; // Assuming you have an id property in the props

    const path = "/" + link + "/" + ID; // Assuming you have a path property in the props

    return (



        <Card className='custom-author-card' style={{ padding: '20px', marginRight: '20px', marginLeft:'15px', marginTop: '10px', marginBottom: '10px', backgroundColor: '#ffffe4' }}>
            <Container fluid className="text-center">
                <div className='ring' style={{ border: '3px solid green', borderRadius: '50%', display: 'inline-block', padding: '5px' }}>
                    <Image src={IMAGE} roundedCircle className="img-fluid" style={{ width: '140px', height: '135px' }} />
                </div>
                <Card.Text className="mt-3">{NAME}</Card.Text>
                {/* Use Link component instead of Button */}
                <Link to={path} >
                    <Button variant='warning'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
                            <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z" />
                            <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0" />
                        </svg>
                        View Profile
                    </Button>
                </Link>
            </Container>
        </Card>
    );
}

export default AuthorCard;
