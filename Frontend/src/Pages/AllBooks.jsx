import React from 'react'
import CustomNavbar from '../Components/Navbar';
import AllCard from '../Components/AllCard';
import Footer from '../Components/Footer';
import Card from '../Components/Card';
import { useState, useEffect } from 'react';
import { getBooks } from './API';


const AllBooks = () => {

  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    try {
      const response = await getBooks();
      setBooks(response.books);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);



  const headlines = 'লক্ষাধিক বইয়ের সংগ্রহ রকমারি ডট কমে। বইয়ের এই বিশাল সমুদ্র-মন্থনে পাঠকের সুবিধার্থে প্রায় ৫০ টির মতো ক্যাটাগরি ও সহস্রাধিক বিষয়ভিত্তিক ক্যাটাগরি রয়েছে রকমারি ডট কমে। যার ফলে খুব সহজেই পাঠক তার পছন্দের ক্যাটাগরি বেছে নিয়ে নির্দিষ্ট বিষয়ভিত্তিক বইগুলো খুঁজে পাবে খুব সহজেই। রকমারি ডট কমের এই বিশাল বইয়ের সমুদ্রে জ্ঞানের জাহাজের নাবিক হতে আপনাকে নিমন্ত্রণ। মানচিত্রটা ধরা আছে নিচেই... ';



  return (
    <div>
      <CustomNavbar />

      <AllCard product={books} component={Card} headlines={headlines} headTitle={'সকল বই'} />
      <Footer />
    </div>
    
  )
}

export default AllBooks