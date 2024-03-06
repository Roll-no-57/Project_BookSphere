import React, { useState , useEffect} from 'react'
import CustomNavbar from '../Components/Navbar';
import AllCard from '../Components/AllCard';
import Footer from '../Components/Footer';
import CustomCategoryCard from '../Components/CategoryCard';
import {getCategories} from './API';

const AllCategories = () => {

      const [categories , setCategories] = useState([]);

      const fetchCategories = async () => {
        try {
          const response = await getCategories();
          setCategories(response.category);
          console.log(response.category);
        } catch (error) {
          console.error('Error fetching categories:', error);
        }
      };

      useEffect(() => {
        fetchCategories();
      }, []);
    

  const headlines = 'সাহিত্যের আঁতুড়ঘর। সাহিত্যের সঠিক মূল্যায়ন করে পাঠকের কাছে উন্মুক্ত করে দেয়ার গুরুদায়িত্ব এই প্রকাশকদের। কেবল বই প্রকাশ নয়,ভালো মানের সাহিত্য বই আকারে নিয়মিত প্রকাশ করে প্রকাশকরা সাহিত্যের ধারা সচলভাবে অব্যাহত রাখেন। পাণ্ডুলিপি,ছাপা,মুদ্রণপ্রমাদ,সব বাঁধা-ত্যাগ-তিতিক্ষা পার করে যখন একটি বাঁধাই করা বই,এক টুকরো সাহিত্য ফসল পাঠকের সাহিত্য রসের ক্ষুধা পূরণ করে তখনই প্রকাশক সার্থক। প্রকাশকদের এই সাহিত্যধারার ট্রেনের সহযাত্রী হয়ে তাই রয়েছে রকমারি ডট কম। রকমারি ডট কম প্রকাশকদের সুযোগ করে দিচ্ছে আধুনিক সাহিত্যের রেনেসাঁর,যেখানে সাধারণ পাঠক আর প্রকাশকের মাঝে সেতুবন্ধন হিসেবে কাজ করবে রকমারি। ';

  return (
    <div>
        <CustomNavbar/>
        <AllCard product={categories} component={CustomCategoryCard} headlines={headlines} headTitle={'সকল বিষয়'}/>
        <Footer/>
    </div>
  )
}

export default AllCategories;