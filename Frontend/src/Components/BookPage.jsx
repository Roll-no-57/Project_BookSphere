import React from 'react';
import CustomNavbar from './Navbar';
import './BookPage.css';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { RiHeartLine, RiHeartFill } from "react-icons/ri";
import { taka } from '../Pages/Constants';
import Services from './services';
import AuthorDetail from './AuthorDetail';



import { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';




import Table from 'react-bootstrap/Table';


import Review from './Review';

{/*import staement for the specification catefory */ }






const BookPage = ({ title, author, category, price }) => {
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
                <img src='/images/book1.jpg' alt='book' style={{ borderRadius: '10px' }} />
              </div>
            </Col>

            {/* Book details column */}
            <Col style={{ padding: '30px' }} md={6} className="d-flex flex-column">
              <div className='book-details'>
                <h2>ভাদুড়ি সমগ্র -১ম (হার্ডকভার)</h2>
                <h3 style={{ marginTop: '40px' }}>by - <a href="#">নীরেন্দ্রনাথ চক্রবর্তী </a></h3>
                <p style={{ marginTop: '40px' }}>Category: <a href="#">পশ্চিমবঙ্গের বই: রহস্য, গোয়েন্দা, ভৌতিক, থ্রিলার ও অ্যাডভেঞ্চার </a></p>
                <h5 style={{ marginTop: '40px' }}>Price: {taka} 200</h5>
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
            <Tab eventKey="home" title="Summary">
              Harry Potter and the Philosopher's Stone," the first book in J.K. Rowling's iconic series, follows the story of Harry Potter, a young boy who discovers he is a wizard on his eleventh birthday. Living with his neglectful aunt, uncle, and cousin after the death of his parents, Harry learns that he is famous in the wizarding world for surviving an attack by the dark wizard Voldemort as an infant, which left him with a lightning-shaped scar on his forehead.

              As Harry begins his first year at Hogwarts School of Witchcraft and Wizardry, he makes friends with Ron Weasley and Hermione Granger, and together they uncover a mystery surrounding a magical object hidden within the school. Along the way, Harry discovers his own magical abilities and begins to learn about his past, including the truth about his parents' deaths.

              As the trio delves deeper into the mystery, they encounter challenges and dangers, including encounters with dark creatures and dark magic. Ultimately, they uncover the truth behind the mysterious object, the Philosopher's Stone, and prevent it from falling into the hands of Voldemort, who seeks to regain his former power.

              Filled with adventure, friendship, and the battle between good and evil, "Harry Potter and the Philosopher's Stone" sets the stage for the epic journey that unfolds throughout the rest of the series, captivating readers of all ages with its magical world and memorable characters.
            </Tab>
            <Tab eventKey="profile" title="Specification">

              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>ইকারাস</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Author</td>
                    <td>মুহম্মদ জাফর ইকবাল</td>
                  </tr>
                  <tr>
                    <td>Publisher</td>
                    <td>সময় প্রকাশন</td>
                  </tr>
                  <tr>
                    <td>ISBN</td>
                    <td>9847011400907</td>
                  </tr>
                  <tr>
                    <td>Edition</td>
                    <td>8th, 2014</td>
                  </tr>
                  <tr>
                    <td>Number of Pages</td>
                    <td>144</td>
                  </tr>
                  <tr>
                    <td>Language</td>
                    <td>Bangla</td>
                  </tr>
                </tbody>
              </Table>


            </Tab>
            <Tab eventKey="contact" title="Author" >
               <AuthorDetail />
            </Tab>
          </Tabs>
        </Container>

      </div>


      {/* product review */}
      <div className='book-review-container'>
          <Review/>
        </div>

    </div>
  );
};

export default BookPage;
