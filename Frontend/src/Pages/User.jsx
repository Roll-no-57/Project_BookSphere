import React, { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './User.css';
import { Form } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Button from 'react-bootstrap/Button';



const Profile = () => {
    const [dateOfBirth, setDateOfBirth] = useState(null);

    return (
        <div>

            <Row>
                <Col md={10}>
                    <h3>Profile Information</h3>
                </Col>
                <Col>
                    <a class="btn btn-warning ms-2" href="/my-section/profile/edit">
                        <i class="bi bi-pencil-square"></i>
                        Edit Profile
                    </a>
                </Col>
            </Row>

            <hr />
            <Form>
                <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                    <Form.Label column sm={2}>
                        Full Name
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control type="email" placeholder="Name" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                    <Form.Label column sm={2}>
                        Date of Birth
                    </Form.Label>
                    <Col sm={10}>
                        <DatePicker
                            selected={dateOfBirth}
                            onChange={(date) => setDateOfBirth(date)}
                            placeholderText="Select Date"
                            dateFormat="MM/dd/yyyy"
                        />
                    </Col>
                </Form.Group>
            </Form>
            <hr />
            {/*Contact information*/}

            <Form>
                <h3>Contact Information</h3>
                <hr />
                <Row>

                    <Col>
                        <Form.Label column sm={2}>
                            Phone
                        </Form.Label>
                        <Form.Control placeholder="First name" />
                    </Col>
                    <Col>
                        <Form.Label column sm={2}>
                            Email
                        </Form.Label>
                        <Form.Control placeholder="Last name" />
                    </Col>
                </Row>
                <hr />
            </Form>
            {/*Profile pic */}
            <div>

                <h3>Profile Picture</h3>
                <hr />

                <Form.Group className="position-relative mb-3">
                    <Form.Label>Picture</Form.Label>
                    <Form.Control
                        type="file"
                        required
                        name="Choose Profile Picture"
                    />
                </Form.Group>
            </div>
            <Button variant='success'>Save profile</Button>
        </div>


    )
}

export default Profile;
