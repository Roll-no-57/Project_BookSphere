import React from 'react'
import CustomNavbar from '../Components/Navbar';
import AllCard from '../Components/AllCard';
import Footer from '../Components/Footer';
import Card from '../Components/Card';


const AllBooks = () => {
    const products = [
        { id: 1, name: 'Product 1', author: 'Apurbo Hossain', price: '$10.00', image: '/images/book1.jpg' },
        { id: 2, name: 'Product 2', author: 'Apurbo Hossain', price: '$15.00', image: '/images/book2.jpg' },
        { id: 3, name: 'Product 3', author: 'Apurbo Hossain', price: '$20.00', image: '/images/book2.jpg' },
        { id: 3, name: 'Product 3', author: 'Apurbo Hossain', price: '$20.00', image: '/images/book2.jpg' },
        { id: 3, name: 'Product 3', author: 'Apurbo Hossain', price: '$20.00', image: '/images/book2.jpg' },
        { id: 3, name: 'Product 3', author: 'Apurbo Hossain', price: '$20.00', image: '/images/book2.jpg' },
    
    ];
    

      const headlines = 'লক্ষাধিক বইয়ের সংগ্রহ রকমারি ডট কমে। বইয়ের এই বিশাল সমুদ্র-মন্থনে পাঠকের সুবিধার্থে প্রায় ৫০ টির মতো ক্যাটাগরি ও সহস্রাধিক বিষয়ভিত্তিক ক্যাটাগরি রয়েছে রকমারি ডট কমে। যার ফলে খুব সহজেই পাঠক তার পছন্দের ক্যাটাগরি বেছে নিয়ে নির্দিষ্ট বিষয়ভিত্তিক বইগুলো খুঁজে পাবে খুব সহজেই। রকমারি ডট কমের এই বিশাল বইয়ের সমুদ্রে জ্ঞানের জাহাজের নাবিক হতে আপনাকে নিমন্ত্রণ। মানচিত্রটা ধরা আছে নিচেই... ';



  return (
    <div>
        <CustomNavbar/>

        <AllCard product={products} component={Card}  headlines={headlines} headTitle={'সকল বই'}/>
        <Footer/>
    </div>
  )
}
 
export default AllBooks