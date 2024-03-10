import React from 'react'
import CustomNavbar from '../Components/Navbar'
import Table from 'react-bootstrap/Table'
import Card from 'react-bootstrap/Card'
import { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import Collapse from 'react-bootstrap/Collapse';
import Footer from '../Components/Footer'
import Form from 'react-bootstrap/Form';

import { getAllBooks, addBook } from './API'

const Books = () => {

    const [books, setBooks] = useState([]);

    const fetchBooks = async () => {
        const response = await getAllBooks();
        setBooks(response.books);
    }

    useEffect(() => {
        fetchBooks();
    }, []);



    const [open, setOpen] = useState(false);

    const [bookData, setBookData] = useState({
        author_id: '',
        publisher_id: '',
        name: '',
        image: 'https://st2.depositphotos.com/5703046/12114/i/950/depositphotos_121142344-stock-photo-white-book-on-white-background.jpg',
        isbn: '',
        page: '',
        edition: '',
        publishing_year: '',
        price: '',
        stock: '',
        language: '',
        genre: '',
        summary: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setBookData({ ...bookData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Call the API function to add a book
            console.log("added book to database :");
            console.log(bookData);
            await addBook(bookData);
            // Clear the form after successful submission
            setBookData({
                author_id: '',
                publisher_id: '',
                name: '',
                image: 'https://st2.depositphotos.com/5703046/12114/i/950/depositphotos_121142344-stock-photo-white-book-on-white-background.jpg',
                isbn: '',
                page: '',
                edition: '',
                publishing_year: '',
                price: '',
                stock: '',
                language: '',
                genre: '',
                summary: ''
            });
            setOpen(false); // Close the form after submission
        } catch (error) {
            console.error('Error adding book:', error);
        }
    };


    return (
        <div>
            <CustomNavbar />

            <div style={{ marginBottom: '20px', margin: '30px' }}>

                <Card style={{ backgroundColor: '#ffffe4' }}>
                    <Row>
                        <Col md={10}>
                            <Card.Body >
                                <Card.Title>All Books</Card.Title>
                            </Card.Body>
                        </Col>
                        <Col>
                            <div style={{ marginTop: '12px' }}>

                                <Button variant="primary"
                                    onClick={() => setOpen(!open)}
                                    aria-controls="example-collapse-text"
                                    aria-expanded={open}

                                >
                                    <i class="bi bi-plus" style={{ fontSize: '20px' }}></i>
                                    Add Book</Button>

                            </div>
                        </Col>

                    </Row>
                </Card>

            </div>
            <div style={{ margin: '30px' }}>
                <Collapse in={open} dimension="width">
                    <div id="example-collapse-text">
                        <Card body style={{ backgroundColor: '#ffffe4' }}>
                            <Form onSubmit={handleSubmit}>
                                {/* Input fields for book information */}
                                <Form.Group className="mb-3" controlId="author_id">
                                    <Form.Label>Author ID</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="author_id"
                                        value={bookData.author_id}
                                        onChange={handleInputChange}
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="publisher_id">
                                    <Form.Label>Publisher ID</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="publisher_id"
                                        value={bookData.publisher_id}
                                        onChange={handleInputChange}
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="name">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="name"
                                        value={bookData.name}
                                        onChange={handleInputChange}
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="image">
                                    <Form.Label>Image URL</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="image"
                                        value={bookData.image}
                                        onChange={handleInputChange}
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="isbn">
                                    <Form.Label>ISBN</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="isbn"
                                        value={bookData.ISBN}
                                        onChange={handleInputChange}
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="page">
                                    <Form.Label>PAGE</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="page"
                                        value={bookData.PAGE}
                                        onChange={handleInputChange}
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="edition">
                                    <Form.Label>EDITION</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="edition"
                                        value={bookData.EDITION}
                                        onChange={handleInputChange}
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="publishing_year">
                                    <Form.Label>publishing_year</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="publishing_year"
                                        value={bookData.publishing_year}
                                        onChange={handleInputChange}
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="price">
                                    <Form.Label>PRICE</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="price"
                                        value={bookData.price}
                                        onChange={handleInputChange}
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="stock">
                                    <Form.Label>Stock</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="stock"
                                        value={bookData.stock}
                                        onChange={handleInputChange}
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="language">
                                    <Form.Label>Language</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="language"
                                        value={bookData.language}
                                        onChange={handleInputChange}
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="genre">
                                    <Form.Label>Genre</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="genre"
                                        value={bookData.genre}
                                        onChange={handleInputChange}
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="Summary">
                                    <Form.Label>Summary</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="summary"
                                        value={bookData.summary}
                                        onChange={handleInputChange}
                                    />
                                </Form.Group>
                                {/* Add other input fields similarly */}
                                <Button variant="primary" type="submit">
                                    Add Book
                                </Button>
                            </Form>

                        </Card>
                    </div>
                </Collapse>

            </div>

            <div style={{ margin: '30px' }}>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th style={{ backgroundColor: '#ffffe4' }}>ID</th>
                            <th style={{ backgroundColor: '#ffffe4' }}>IMAGE</th>
                            <th style={{ backgroundColor: '#ffffe4' }}>NAME</th>
                            <th style={{ backgroundColor: '#ffffe4' }}>AUTHOR_NAME</th>
                            <th style={{ backgroundColor: '#ffffe4' }}>PRICE</th>
                            <th style={{ backgroundColor: '#ffffe4' }}>STOCK</th>
                            <th style={{ backgroundColor: '#ffffe4' }}>GENRE</th>
                            {/* <th style={{ backgroundColor: '#ffffe4' }}>UPDATE</th> */}
                        </tr>
                    </thead>
                    {
                        books.map((book, index) => {
                            return (
                                <tbody >
                                    <tr>
                                        <td style={{ backgroundColor: '#ffffe4' }}>{book.ID}</td>
                                        <td style={{ backgroundColor: '#ffffe4' }}>
                                            <img src={book.IMAGE} alt="book" style={{ width: '70px', height: '70px' }} />
                                        </td>
                                        <td style={{ backgroundColor: '#ffffe4' }}>{book.NAME}</td>
                                        <td style={{ backgroundColor: '#ffffe4' }}>{book.AUTHOR_NAME}</td>
                                        <td style={{ backgroundColor: '#ffffe4' }}>{book.PRICE}</td>
                                        <td style={{ backgroundColor: '#ffffe4' }}>{book.STOCK}</td>
                                        <td style={{ backgroundColor: '#ffffe4' }}>{book.GENRE}</td>
                                        {/* <td style={{ backgroundColor: '#ffffe4' }}>
                                            <Button variant="secondary" >Update</Button>
                                        </td> */}
                                    </tr>

                                </tbody>
                            )
                        })
                    }
                </Table>
            </div>

            <Footer />

        </div>
    )
}

export default Books