import React from 'react';
import CustomNavbar from './Navbar';
import './BookPage.css';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { RiHeartLine, RiHeartFill } from "react-icons/ri";
import { taka } from '../Pages/Constants';
import Services from './services';
import AuthorDetail from './AuthorDetail';
import { FaStar } from 'react-icons/fa';
import { getParam } from '../Pages/Utils';
import { getBookByID } from '../Pages/API';
import { useEffect } from 'react';



import { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';




import Table from 'react-bootstrap/Table';


import Review from './Review';
import Footer from './Footer';

{/*import staement for the specification catefory */ }

const demoData = [
  {
    reviewer: 'Apurbo Hossain',
    review: '"The Great Gatsby" by F. Scott Fitzgerald is a quintessential American novel that delves into the complexities of the human experience. Set in the roaring 1920s, Fitzgerald paints a vivid picture of the Jazz Age, where wealth, excess, and societal decadence reign supreme. At the heart of the story is Jay Gatsby, a mysterious and enigmatic figure whose pursuit of the American Dream leads him down a path of obsession and tragedy. Through its richly drawn characters and evocative prose, the novel explores timeless themes of love, identity, and the illusion of the American Dream, making it a literary masterpiece that continues to resonate with readers today.',
    rating: 5,
    date: '2021-08-20',
    image: 'https://bit.ly/dan-abramov',

  },
  {
    reviewer: 'Apurbo Hossain',
    review: '"The Great Gatsby" by F. Scott Fitzgerald is a quintessential American novel that delves into the complexities of the human experience. Set in the roaring 1920s, Fitzgerald paints a vivid picture of the Jazz Age, where wealth, excess, and societal decadence reign supreme. At the heart of the story is Jay Gatsby, a mysterious and enigmatic figure whose pursuit of the American Dream leads him down a path of obsession and tragedy. Through its richly drawn characters and evocative prose, the novel explores timeless themes of love, identity, and the illusion of the American Dream, making it a literary masterpiece that continues to resonate with readers today.',
    rating: 3,
    date: '2021-08-20',
    image: 'https://bit.ly/dan-abramov',
  },
  {
    reviewer: 'Apurbo Hossain',
    review: '"The Great Gatsby" by F. Scott Fitzgerald is a quintessential American novel that delves into the complexities of the human experience. Set in the roaring 1920s, Fitzgerald paints a vivid picture of the Jazz Age, where wealth, excess, and societal decadence reign supreme. At the heart of the story is Jay Gatsby, a mysterious and enigmatic figure whose pursuit of the American Dream leads him down a path of obsession and tragedy. Through its richly drawn characters and evocative prose, the novel explores timeless themes of love, identity, and the illusion of the American Dream, making it a literary masterpiece that continues to resonate with readers today.',
    rating: 1,
    date: '2021-08-20',
    image: 'https://bit.ly/dan-abramov',
  },
  {
    reviewer: 'Apurbo Hossain',
    review: '"The Great Gatsby" by F. Scott Fitzgerald is a quintessential American novel that delves into the complexities of the human experience. Set in the roaring 1920s, Fitzgerald paints a vivid picture of the Jazz Age, where wealth, excess, and societal decadence reign supreme. At the heart of the story is Jay Gatsby, a mysterious and enigmatic figure whose pursuit of the American Dream leads him down a path of obsession and tragedy. Through its richly drawn characters and evocative prose, the novel explores timeless themes of love, identity, and the illusion of the American Dream, making it a literary masterpiece that continues to resonate with readers today.',
    rating: 3,
    date: '2021-08-20',
    image: 'https://bit.ly/dan-abramov',
  }

]



const BookPage = () => {
  
  
  // retriving data for a single book from the database
  const bookID = getParam(); // get the book id from the URL using the getParam function
  
  const [book, setBook] = useState([]);
  
  const fetchBooks = async () => {
    try {
      const response = await getBookByID(bookID, {});
      setBook(response.book);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };
  
  useEffect(() => {
    fetchBooks();
  }, []);
  
  
  const authorDetailInfo = {
    name: book.AUTHOR_NAME,
    image: book.AUTHOR_IMAGE,
    followers: 1.1,
    description: book.AUTHOR_DESCRIPTION,
  }
  
  
  
  



  const total_rating = 5;
  const total_review = 5;
  const [isAddedToWishlist, setIsAddedToWishlist] = React.useState(false);

  const handleAddToWishlist = () => {
    setIsAddedToWishlist(!isAddedToWishlist);
  };

  {/*useeffect for the specification div */ }
  const [key, setKey] = useState('home');

  return (
    <div>
      <CustomNavbar />
      <div className='book-detail-container'>
        <Container fluid>
          <Row className="h-100">
            {/* Image column */}
            <Col md={3} style={{ padding: '20px' }} className="d-flex flex-column">
              <div className='book-image'>
                <img src={book.IMAGE} alt='book' style={{ borderRadius: '10px', width: '260px', height: '372px' }} />
              </div>
            </Col>

            {/* Book details column */}
            <Col style={{ padding: '30px' }} md={6} className="d-flex flex-column">
              <div className='book-details'>
                <h2>{book.NAME}</h2>
                <h3 style={{ marginTop: '40px' }}>by - <a href="#">{book.AUTHOR_NAME} </a></h3>
                <p style={{ marginTop: '40px' }}>Category : <a href="#">{book.GENRE} </a></p>
                <p style={{ marginTop: '40px' }}>Publisher : <a href="#">{book.PUBLISHER_NAME} </a></p>
                <h5 style={{ marginTop: '40px' }}>Price: {taka} {book.PRICE}</h5>
                <div style={{ marginTop: '40px' }}>


                  <Button variant="outline-warning" style={{ marginRight: '30px' }}>Add to Cart</Button>
                  <Button
                    variant={isAddedToWishlist ? "danger" : "primary"}
                    onClick={handleAddToWishlist}
                  >
                    {isAddedToWishlist ? "Remove from Wishlist" : "Add to Wishlist"}
                  </Button>
                </div>
              </div>
            </Col>

            {/* Services column */}
            <Col style={{ padding: '30px' }} md={3} className="d-flex flex-column">
              {/* Add additional services or details here */}
              <Services />
            </Col>
          </Row>
        </Container>
      </div>



      {/* product specification and summary books */}

      <div className='book-Specification-container'>

        <Container fluid>
          <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(k) => setKey(k)}
            className="mb-3"
          >
            <Tab eventKey="home" title="Summary" style={{ padding: '25px' }}>
              {book.SUMMARY ? (
                <p>{book.SUMMARY}</p>
              ) : (
                <p>No Summary Available for this book.</p>
              )}
            </Tab>

            <Tab eventKey="profile" title="Specification">

              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>{book.NAME}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Author</td>
                    <td>{book.AUTHOR_NAME}</td>
                  </tr>
                  <tr>
                    <td>Publisher</td>
                    <td>{book.PUBLISHER_NAME}</td>
                  </tr>
                  <tr>
                    <td>ISBN</td>
                    <td>{book.ISBN}</td>
                  </tr>
                  <tr>
                    <td>Edition</td>
                    <td>{book.EDITION}</td>
                  </tr>
                  <tr>
                    <td>Number of Pages</td>
                    <td>{book.PAGE}</td>
                  </tr>
                  <tr>
                    <td>Language</td>
                    <td>{book.LANGUAGE}</td>
                  </tr>
                </tbody>
              </Table>


            </Tab>
            <Tab eventKey="contact" title="Author" >
              <AuthorDetail {...authorDetailInfo} />
            </Tab>
          </Tabs>
        </Container>

      </div>


      {/* product review */}
      <div className='book-review-container'>
        {/* <Review /> */}
        <h3 style={{ marginBottom: '20px' }}>Ratings and Reviews</h3>
        <hr></hr>
        <h5 style={{ marginBottom: '20px' }}> {total_rating} Ratings and {total_review} Reviews</h5>
        <p>Rate this Book</p>
        <Review />

        {
          demoData.map((data, index) => {
            return (
              <div key={index}>
                <hr />
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <img src={data.image} alt='reviewer' style={{ borderRadius: '10px', height: '100px', width: '100px', marginRight: '50px' }} />
                  <div>
                    <h5> by- <strong>{data.reviewer}</strong></h5>
                    <p>{data.date}</p>
                    {/* Render the rating, date, or any other information here */}
                    <div>
                      {[...Array(data.rating)].map((_, i) => (
                        <FaStar
                          key={i}
                          style={{ marginRight: 10 }}
                          color='#FFBA5A'
                          size={24}
                        />
                      ))}
                    </div>
                    <div>{data.review}</div>
                  </div>
                </div>
              </div>
            );
          })
        }



      </div>
      <Footer />
    </div>
  );
};

export default BookPage;
