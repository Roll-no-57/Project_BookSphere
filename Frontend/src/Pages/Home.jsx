import React from 'react';
import CustomNavbar from '../Components/Navbar';
import Customcarousel from '../Components/Carousals';
import MultiCarousel from '../Components/Multicarousel';
import Card from '../Components/Card';
import CategoryCard from '../Components/CategoryCard';
import AuthorCard from '../Components/AuthorCard';
import Footer from '../Components/Footer';
import BookPage from '../Components/BookPage';


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

      <MultiCarousel component={Card} products={products} headLines={"Best Sellers"}/>

      
      <MultiCarousel component={CategoryCard} products={CategoriesItems} headLines={"Categories"}/>

      
      <MultiCarousel component={Card} products={products} headLines={"Popular Products"}/>


      <MultiCarousel component={AuthorCard} products={authors} headLines={"Authors"}/>
      <Footer />


      {/* <BookPage /> */}



    </div>
  );
}

export default Home;
