import React from 'react'
import CustomNavbar from '../Components/Navbar';
import AllCard from '../Components/AllCard';
import Footer from '../Components/Footer';
import AuthorCard from '../Components/AuthorCard';
import {getAllAuthors} from './API';
import { useState, useEffect } from 'react';

const AllAuthors = () => {

  
  const [authors, setauthors] = useState([]);

  const fetchAuthors = async () => {
    try {
      const response = await getAllAuthors({});
      setauthors(response.authors);
    }
    catch (error) {
      console.error('Error fetching authors:', error);
    }
  }

  useEffect(() => {
    fetchAuthors();
  },[]);




  const headlines = 'লেখক! আক্ষরিক ভাবে বলতে গেলে সৃজনশীল কোনকিছু লেখেন যিনি তাকেই লেখক বলা যায়। কিন্তু ‘লেখক’ শব্দটির ব্যাপ্তি আসলে এতোটুকুতেই সীমাবদ্ধ নয়। লেখক এই বাস্তবিক জগতের সমান্তরালে একটি কাল্পনিক পৃথিবী তৈরির ক্ষমতা রাখেন। কাল্পনিক চরিত্রগুলো তার লেখনী ও কলমের প্রাণখোঁচায় জীবন্ত হয়ে ওঠে। একজন লেখক তাঁর লেখার মাধ্যমে একটি প্রজন্মের চিন্তাধারা গড়ে দিতে পারেন। তাই লেখকদের কিংবদন্তী হবার পথ করে দিতে রকমারি ডট কম বদ্ধ পরিকর। ';

  return (
    <div>
      <CustomNavbar />
      <AllCard product={authors} link={'author'} component={AuthorCard} headlines={headlines} headTitle={'সকল লেখক'}/>
      <Footer />
    </div>
  )
}

export default AllAuthors;