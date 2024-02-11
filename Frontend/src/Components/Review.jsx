import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { FaStar } from 'react-icons/fa';

const colors = {
    orange: "#FFBA5A",
    grey: "#a9a9a9"
};

const styles = {
    stars: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center", // corrected property name and added quotes
        alignItems: "center", // corrected property name and added quotes
        marginBottom: "20px"
    }
}

function Review() {
    const [show, setShow] = useState(false);
    const [review, setReview] = useState('Write a review');
    const [variant, setVariant] = useState('primary');

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleSave = () => {
        console.log('Save');
        setReview('Edit Review');
        setVariant('warning');
        handleClose();
    }





    {/*Handling the rating start functions*/ }
    const [currentValue, setCurrentValue] = useState(0);
    const [hoverValue, setHoverValue] = useState(undefined);
    const stars = Array(5).fill(0);

    const handleStartClick = (value) => {
        setCurrentValue(value);
    }

    const handleMouseOver = (newHoverValue) => {
        setHoverValue(newHoverValue);
    }

    const handleMouseLeave = () => {
        setHoverValue(undefined);
    }

    return (
        <>
            <Button variant={variant} onClick={handleShow}>
                {review}
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Review Form</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        
                        <div styles={styles.stars}>

                            {
                                stars.map((_, index) => {
                                    return (
                                        <FaStar
                                            key={index}
                                            size={24}
                                            onClick={()=>{handleStartClick(index + 1)}}
                                            onMouseOver={()=>{handleMouseOver(index + 1)}}
                                            onMouseLeave={handleMouseLeave}
                                            color={(hoverValue || currentValue) > index ? colors.orange : colors.grey}
                                            style={{ marginRight: 10, cursor: "pointer" }}
                                        />
                                    )
                                })
                            }

                        </div>



                        <Form.Group
                            className="mb-3"
                            controlId="ReviewForm.ControlTextarea1"
                        >
                            <Form.Label>Your Review</Form.Label>
                            <Form.Control as="textarea" rows={3} autoFocus />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSave}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Review;