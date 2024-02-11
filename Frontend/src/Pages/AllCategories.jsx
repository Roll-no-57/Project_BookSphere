import React from 'react'
import CustomNavbar from '../Components/Navbar';
import AllCard from '../Components/AllCard';
import Footer from '../Components/Footer';
import CustomCategoryCard from '../Components/CategoryCard';

const AllCategories = () => {

      const CategoriesItems = [
        { id: 1, name: 'Product 1', author: 'Apurbo Hossain', price: '$10.00', image: '/images/category.jpg' },
        { id: 2, name: 'Product 2', author: 'Apurbo Hossain', price: '$15.00', image: '/images/category.jpg' },
        { id: 3, name: 'Product 3', author: 'Apurbo Hossain', price: '$20.00', image: '/images/category.jpg' },
        { id: 3, name: 'Product 3', author: 'Apurbo Hossain', price: '$20.00', image: '/images/category.jpg' },
        { id: 3, name: 'Product 3', author: 'Apurbo Hossain', price: '$20.00', image: '/images/category.jpg' },
        { id: 3, name: 'Product 3', author: 'Apurbo Hossain', price: '$20.00', image: '/images/category.jpg' },
    
        // Add more products as needed
      ];
    

  const headlines = 'সাহিত্যের আঁতুড়ঘর। সাহিত্যের সঠিক মূল্যায়ন করে পাঠকের কাছে উন্মুক্ত করে দেয়ার গুরুদায়িত্ব এই প্রকাশকদের। কেবল বই প্রকাশ নয়,ভালো মানের সাহিত্য বই আকারে নিয়মিত প্রকাশ করে প্রকাশকরা সাহিত্যের ধারা সচলভাবে অব্যাহত রাখেন। পাণ্ডুলিপি,ছাপা,মুদ্রণপ্রমাদ,সব বাঁধা-ত্যাগ-তিতিক্ষা পার করে যখন একটি বাঁধাই করা বই,এক টুকরো সাহিত্য ফসল পাঠকের সাহিত্য রসের ক্ষুধা পূরণ করে তখনই প্রকাশক সার্থক। প্রকাশকদের এই সাহিত্যধারার ট্রেনের সহযাত্রী হয়ে তাই রয়েছে রকমারি ডট কম। রকমারি ডট কম প্রকাশকদের সুযোগ করে দিচ্ছে আধুনিক সাহিত্যের রেনেসাঁর,যেখানে সাধারণ পাঠক আর প্রকাশকের মাঝে সেতুবন্ধন হিসেবে কাজ করবে রকমারি। ';

  return (
    <div>
        <CustomNavbar/>
        <AllCard product={CategoriesItems} component={CustomCategoryCard} headlines={headlines} headTitle={'সকল বিষয়'}/>
        <Footer/>
    </div>
  )
}

export default AllCategories;