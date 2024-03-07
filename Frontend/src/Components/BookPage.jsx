import React from 'react';
import CustomNavbar from './Navbar';
import './BookPage.css';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { taka } from '../Pages/Constants';
import Services from './services';
import AuthorDetail from './AuthorDetail';
import { FaStar } from 'react-icons/fa';
import { getParam } from '../Pages/Utils';
import {
  getBookByID, getReviewsByBookID, SendReview, getReviewsByBookIDofUser, UpdateReview,
  getwishlistBybookIDandUserID, deleteBookFromWishlist, addBookToWishlist, addBookToCart, getPickedBookByUser
} from '../Pages/API';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';




import { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';




import Table from 'react-bootstrap/Table';


import Review from './Review';
import Footer from './Footer';

const BookPage = () => {


  // get the book id from the URL using the getParam function
  const bookID = getParam();

  // retriving data for a single book from the database
  const [book, setBook] = useState([]);

  const fetchBook = async () => {
    try {
      const response = await getBookByID(bookID, {});
      setBook(response.book);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  // Retrieving the data of the review for a book from the database
  const [reviews, setReviews] = useState([]);

  const fetchReviews = async () => {
    try {
      const response = await getReviewsByBookID(bookID, {});
      setReviews(response.reviews);
    }
    catch (error) {
      console.error('Error fetching reviews:', error);
    }
  }


  const [isReviewed, setIsReviewed] = useState(false);

  const fetchUserReview = async () => {
    try {
      const response = await getReviewsByBookIDofUser(bookID, {});
      if (response.reviews.length > 0) {
        setIsReviewed(true);
        console.log('User has already reviewed this book')
      }
      else {
        setIsReviewed(false);
        console.log('User has not reviewed this book')
      }
    }
    catch (error) {
      console.error('Error fetching reviews:', error);
    }
  }

  {/* this section is for the add to wishlist functionality*/ }
  const [isAddedToWishlist, setIsAddedToWishlist] = React.useState(false);

  const handleAddToWishlist = async () => {
    if (isAddedToWishlist) {
      console.log('Removing from wishlist');
      // Remove from wishlist
      await deleteBookFromWishlist(bookID);
      setIsAddedToWishlist(false);
    }
    else {
      console.log('Adding to wishlist');
      // Add to wishlist
      await addBookToWishlist(bookID);
      setIsAddedToWishlist(true);
    }
  };


  const fetchwishlistUser = async () => {
    try {
      const response = await getwishlistBybookIDandUserID(bookID, {});
      if (response.wishlist.length > 0) {
        setIsAddedToWishlist(true);

      }
      else {
        setIsAddedToWishlist(false);
      }
    }
    catch (error) {
      console.error('Error fetching reviews:', error);
    }
  }


  {/* this section is for the add to cart functionality*/ }
  const [isAddedToCart, setIsAddedToCart] = React.useState(false);

  const handleAddToCart = async () => {
    console.log('Adding to cart');
    if (isAddedToCart) {
      setIsAddedToCart(false);
    }
    else {
      await addBookToCart(bookID);
      setIsAddedToCart(true);
    }
  };

  const handleGoToCart = () => {
    window.location.href = '/my-section/cart';
  };


  const fetchPickedBookByUser = async () => {
    try {
      const response = await getPickedBookByUser(bookID);
      if (response.picked.length > 0) {
        setIsAddedToCart(true);
      }
      else {
        setIsAddedToCart(false);
      }
    }
    catch (error) {
      console.error('Error fetching reviews:', error);
    }
  }




  useEffect(() => {
    fetchBook();
    fetchReviews();
    fetchUserReview();
    fetchwishlistUser();
    fetchPickedBookByUser();
  }, []);


  const addReview = async (review) => {
    try {
      if (isReviewed) {
        console.log('Updating review');
        await UpdateReview(bookID, review);
      }
      else {
        console.log('Adding review');
        await SendReview(bookID, review);
      }
      // Fetch reviews after adding a review
      fetchReviews();
      fetchBook();
      fetchUserReview();
      console.log('Review: from bookPage', review);
    } catch (error) {
      console.error('Error adding review:', error);
    }
  }


  const authorDetailInfo = {
    name: book.AUTHOR_NAME,
    image: book.AUTHOR_IMAGE,
    followers: 1.1,
    description: book.AUTHOR_DESCRIPTION,
  }


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
            <Col style={{ padding: '20px' }} md={6} className="d-flex flex-column">
              <div className='book-details'>
                <h2>{book.NAME}</h2>
                <h4 style={{ marginTop: '35px' }}>by - <Link to={`/author/${book.AUTHOR_ID}`} style={{ textDecoration: 'none' }}>{book.AUTHOR_NAME} </Link></h4>
                <p style={{ marginTop: '25px' }}>Category : <Link to={`/category/${book.GENRE}`} style={{ textDecoration: 'none' }}>{book.GENRE} </Link></p>
                <p style={{ marginTop: '15px' }}>Publisher : <Link to={`/publisher/${book.PUBLISHER_ID}`} style={{ textDecoration: 'none' }}>{book.PUBLISHER_NAME} </Link></p>
                <h5 style={{ marginTop: '15px' }}>Price: {taka} {book.PRICE}</h5>

                {book.STOCK > 0 ?
                  <div>
                    <div style={{ marginTop: '15px', marginBottom: '10px' }}>
                      <i class="bi bi-check-circle-fill" style={{ color: 'green', fontSize: '20px', marginRight: '10px' }}></i>
                      In Stock {book.STOCK < 20 ? <span style={{ color: 'red' }}>(Only {book.STOCK} copies left)</span> : null}
                    </div>
                    <p style={{ marginLeft: '20px' }}>* স্টক আউট হওয়ার আগেই অর্ডার করুন</p>
                  </div>
                  :
                  <div>
                    <div style={{ marginTop: '15px', marginBottom: '10px' }}>
                      <i class="bi bi-exclamation-triangle-fill" style={{ color: 'red', fontSize: '20px', marginRight: '10px' }}></i>
                      <span style={{ color: 'red' }}>Out of Stock</span>
                      <p style={{ marginLeft: '20px' }}>* বর্তমানে রকমারিতে এই বইটির মুদ্রিত কপি নেই। বইটি স্টকে এভেইলেবল হলে এসএমএস/ইমেইলের মাধ্যমে নোটিফিকেশন পেতে রিকুয়েস্ট ফর স্টক এ ক্লিক করুন।</p>
                    </div>
                  </div>

                }

                <div style={{ marginTop: '20px' }}>


                  {
                    isAddedToCart ?
                      <Button variant="warning" style={{ marginRight: '30px' }} onClick={handleGoToCart}>
                        Go to Cart
                        <i className="bi bi-arrow-right" style={{ fontSize: '20px' ,marginLeft:'10px' }}></i>
                      </Button>
                      :
                      <Button variant="warning" style={{ marginRight: '30px' }} onClick={handleAddToCart} >
                        <i className="bi bi-bag-plus" style={{ fontSize: '20px', marginRight: '10px' }}></i>
                        Add to Cart</Button>
                  }
                  <Button
                    variant={isAddedToWishlist ? "danger" : "primary"}
                    onClick={handleAddToWishlist}
                  >
                    {
                      isAddedToWishlist ? <i className="bi bi-heartbreak" style={{ fontSize: '22px', marginRight: '10px' }}></i> : <i className="bi bi-heart" style={{ fontSize: '22px', marginRight: '5px' }}></i>
                    }

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
        <h5 style={{ marginBottom: '20px' }}> {Math.ceil(book.STAR / Math.max(book.REVIEW_COUNT, 1))} Ratings and {book.REVIEW_COUNT} Reviews</h5>
        <p>Rate this Book</p>

        <Review addReview={addReview} bookID={bookID} isReviewed={isReviewed} />

        {
          reviews.map((data, index) => {
            return (
              <div key={index}>
                <hr />
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <img src={data.USER_IMAGE} alt='reviewer' style={{ borderRadius: '10px', height: '100px', width: '100px', marginRight: '50px' }} />
                  <div>
                    <h5> by- <strong>{data.USER_NAME}</strong></h5>
                    <p>{data.CREATED_AT}</p>
                    {/* Render the rating, date, or any other information here */}
                    <div>
                      {[...Array(data.STARS)].map((_, i) => (
                        <FaStar
                          key={i}
                          style={{ marginRight: 10 }}
                          color='#FFBA5A'
                          size={24}
                        />
                      ))}
                    </div>
                    <div>{data.REVIEW}</div>
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
