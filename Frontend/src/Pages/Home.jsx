import React from 'react';
import CustomNavbar from '../Components/Navbar';
import Customcarousel from '../Components/Carousals';
import MultiCarousel from '../Components/Multicarousel';
import Card from '../Components/Card';
import CategoryCard from '../Components/CategoryCard';
import AuthorCard from '../Components/AuthorCard';
import Footer from '../Components/Footer';


const Home = () => {

  const products = [
    { id: 1, name: 'Product 1', author: 'Apurbo Hossain', price: '$10.00', image: '/images/book1.jpg' },
    { id: 2, name: 'Product 2', author: 'Apurbo Hossain', price: '$15.00', image: '/images/book2.jpg' },
    { id: 3, name: 'Product 3', author: 'Apurbo Hossain', price: '$20.00', image: '/images/book2.jpg' },
    { id: 3, name: 'Product 3', author: 'Apurbo Hossain', price: '$20.00', image: '/images/book2.jpg' },
    { id: 3, name: 'Product 3', author: 'Apurbo Hossain', price: '$20.00', image: '/images/book2.jpg' },
    { id: 3, name: 'Product 3', author: 'Apurbo Hossain', price: '$20.00', image: '/images/book2.jpg' },

    // Add more products as needed
  ];
  const CategoriesItems = [
    { id: 1, name: 'Product 1', author: 'Apurbo Hossain', price: '$10.00', image: '/images/category.jpg' },
    { id: 2, name: 'Product 2', author: 'Apurbo Hossain', price: '$15.00', image: '/images/category.jpg' },
    { id: 3, name: 'Product 3', author: 'Apurbo Hossain', price: '$20.00', image: '/images/category.jpg' },
    { id: 3, name: 'Product 3', author: 'Apurbo Hossain', price: '$20.00', image: '/images/category.jpg' },
    { id: 3, name: 'Product 3', author: 'Apurbo Hossain', price: '$20.00', image: '/images/category.jpg' },
    { id: 3, name: 'Product 3', author: 'Apurbo Hossain', price: '$20.00', image: '/images/category.jpg' },

    // Add more products as needed
  ];

  const authors = [
    { id: 1, name: 'Product 1', author: 'Apurbo Hossain', price: '$10.00', image: 'https://bit.ly/dan-abramov' },
    { id: 2, name: 'Product 2', author: 'Apurbo Hossain', price: '$15.00', image: 'https://bit.ly/dan-abramov' },
    { id: 3, name: 'Product 3', author: 'Apurbo Hossain', price: '$20.00', image: 'https://bit.ly/dan-abramov' },
    { id: 3, name: 'Product 3', author: 'Apurbo Hossain', price: '$20.00', image: 'https://bit.ly/dan-abramov' },
    { id: 3, name: 'Product 3', author: 'Apurbo Hossain', price: '$20.00', image: 'https://bit.ly/dan-abramov' },
    { id: 3, name: 'Product 3', author: 'Apurbo Hossain', price: '$20.00', image: 'https://bit.ly/dan-abramov' },

    // Add more products as needed
  ];


  return (
    <div>
      <CustomNavbar />

      <Customcarousel />

      {/* Best Seller Header with Horizontal Line */}
      <div style={{ textAlign: 'center', margin: '20px 0', marginBottom: '30px' }}>
        <h2>Best Sellers</h2>
        <hr style={{ width: '50%', borderTop: '2px solid black', margin: 'auto' }} />
      </div>

      <MultiCarousel component={Card} products={products} />

      <div style={{ textAlign: 'center', margin: '30px 0' }}>
        <h2>Category</h2>
        <hr style={{ width: '50%', borderTop: '2px solid black', margin: 'auto' }} />
      </div>
      <MultiCarousel component={CategoryCard} products={CategoriesItems} />

      <div style={{ textAlign: 'center', margin: '30px 0' }}>
        <h2>Popular Products</h2>
        <hr style={{ width: '50%', borderTop: '2px solid black', margin: 'auto' }} />
      </div>

      <MultiCarousel component={Card} products={products} />

      <div style={{ textAlign: 'center', margin: '30px 0' }}>
        <h2>Best Seller Author</h2>
        <hr style={{ width: '50%', borderTop: '2px solid black', margin: 'auto' }} />
      </div>

      <MultiCarousel component={AuthorCard} products={authors}/>
      <Footer />



    </div>
  );
}

export default Home;
