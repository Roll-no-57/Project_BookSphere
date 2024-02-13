import React from 'react'
import CustomNavbar from '../Components/Navbar';
import AllCard from '../Components/AllCard';
import Footer from '../Components/Footer';
import AuthorCard from '../Components/AuthorCard';

const AllPublisher = () => {

  const Publisher = [
    { id: 1, name: 'Product 1', author: 'Apurbo Hossain', price: '$10.00', image: '/images/publishing.png' },
    { id: 2, name: 'Product 2', author: 'Apurbo Hossain', price: '$15.00', image: '/images/publishing.png' },
    { id: 3, name: 'Product 3', author: 'Apurbo Hossain', price: '$20.00', image: '/images/publishing.png' },
    { id: 3, name: 'Product 3', author: 'Apurbo Hossain', price: '$20.00', image: '/images/publishing.png' },
    { id: 3, name: 'Product 3', author: 'Apurbo Hossain', price: '$20.00', image: '/images/publishing.png' },
    { id: 3, name: 'Product 3', author: 'Apurbo Hossain', price: '$20.00', image: '/images/publishing.png' },

    // Add more products as needed
  ];

  const headlines = 'প্রকাশক! আক্ষরিক ভাবে বলতে গেলে সৃজনশীল কোনকিছু লেখেন যিনি তাকেই লেখক বলা যায়। কিন্তু ‘লেখক’ শব্দটির ব্যাপ্তি আসলে এতোটুকুতেই সীমাবদ্ধ নয়। লেখক এই বাস্তবিক জগতের সমান্তরালে একটি কাল্পনিক পৃথিবী তৈরির ক্ষমতা রাখেন। কাল্পনিক চরিত্রগুলো তার লেখনী ও কলমের প্রাণখোঁচায় জীবন্ত হয়ে ওঠে। একজন লেখক তাঁর লেখার মাধ্যমে একটি প্রজন্মের চিন্তাধারা গড়ে দিতে পারেন। তাই লেখকদের কিংবদন্তী হবার পথ করে দিতে রকমারি ডট কম বদ্ধ পরিকর। ';

  return (
    <div> 
      <CustomNavbar />
      <AllCard product={Publisher} link={'publisher'} component={AuthorCard} headlines={headlines} headTitle={'সকল প্রকাশনী'}/>
      <Footer />
    </div>
  )
}

export default AllPublisher