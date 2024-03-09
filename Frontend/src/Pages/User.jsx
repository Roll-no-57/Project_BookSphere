import React, { useState, useEffect } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './User.css';
import { Form } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { getUser ,updateUser} from './API';



const Profile = () => {


    const [user, setUser] = useState({});
    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [phone, setPhone] = useState(null);
    const [profilePic, setProfilePic] = useState(null);
    const [dateOfBirth, setDateOfBirth] = useState(null);
    const [address, setAddress] = useState(null);
    const [isEditing, setIsEditing] = useState(false);

    const fetchUser = async () => {
        const response = await getUser();
        setUser(response.user);
    }

    useEffect(() => {
        fetchUser();
    }, []);

    useEffect(() => {
        if (user.NAME !== undefined) {
            setName(user.NAME);
            setEmail(user.EMAIL);
            setPhone(user.PHONE);
            setProfilePic(user.IMAGE);
            setAddress(user.ADDRESS);
            // setDateOfBirth(new Date(user.DATE_OF_BIRTH));
        }
    }, [user]);


    const handleNameChange = (event) => {
        setName(event.target.value);
    };
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };
    const handlePhoneChange = (event) => {
        setPhone(event.target.value);
    }
    const handleProfilePicChange = (event) => {
        setProfilePic(event.target.value);
    }
    const handleAddressChange = (event) => {
        setAddress(event.target.value);
    }


    const formatDate = (date) => {
        const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
        return date.toLocaleDateString('en-GB', options);
    };


    const handleEditing = () => {

        if (isEditing) {
            // `Save Profile` button clicked
            console.log("Save Profile button clicked");
            const res = {
                name: name,
                email: email,
                address: address,
                phone: phone,
                dob: "01-01-1999",
                image: "/images/profile2.jpg"
            }
            
            console.log(res);
            console.log("type of the date of birth is: ", typeof (name)); 
            updateUser(res);   
            setIsEditing(!isEditing);
        }
        else {
            setIsEditing(!isEditing);
        }



    }



    return (
        <div>

            <Row>
                <Col md={10}>
                    <h3>Profile Information</h3>
                </Col>
                <Col>

                    {
                        isEditing ?

                            <a class="btn btn-success ms-2" onClick={handleEditing}>
                                <i class="bi bi-pencil-square"></i>
                                Save Profile
                            </a>

                            :
                            <a class="btn btn-warning ms-2" onClick={handleEditing}>
                                <i class="bi bi-pencil-square"></i>
                                Edit Profile
                            </a>

                    }

                </Col>
            </Row>

            <hr />
            <Form>
                <Form.Group as={Row} className="mb-3" controlId="formHorizontalName">
                    <Form.Label column sm={2}>
                        Full Name
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control
                            type="name"
                            placeholder="Name"
                            value={name}
                            onChange={handleNameChange}
                            disabled={!isEditing}
                        />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formHorizontalDob">
                    <Form.Label column sm={2}>
                        Date of Birth
                    </Form.Label>
                    <Col sm={10}>
                        <DatePicker
                            selected={dateOfBirth}
                            onChange={(date) => setDateOfBirth(date)}
                            placeholderText="Select Date"
                            dateFormat="DD/MM/YYYY"
                            disabled={!isEditing}
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
                    <Row>

                        <Col>
                            <Form.Label column sm={2}>
                                Phone
                            </Form.Label>
                            <Form.Control
                                placeholder="Phone number"
                                value={phone}
                                onChange={handlePhoneChange}
                                disabled={!isEditing}
                            />
                        </Col>
                        <Col>
                            <Form.Label column sm={2}>
                                Email
                            </Form.Label>
                            <Form.Control
                                placeholder="Email"
                                value={email}
                                onChange={handleEmailChange}
                                disabled={!isEditing}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Form.Label column sm={2}>
                            Present Address
                        </Form.Label>
                        <Form.Control
                            placeholder="Address"
                            value={address}
                            onChange={handleAddressChange}
                            disabled={!isEditing}

                        />

                    </Row>
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
                        // value={profilePic}
                        onChange={handleProfilePicChange}
                        disabled={!isEditing}
                    />
                </Form.Group>
            </div>

        </div>


    )
}

export default Profile;
