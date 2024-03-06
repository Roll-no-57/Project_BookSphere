import React from 'react'
import { getBooksByCategoryID } from './API';
import { useState, useEffect } from 'react';
import CustomNavbar from '../Components/Navbar';
import AllCard from '../Components/AllCard';
import Card from '../Components/Card';
import { getParam } from './Utils';
import Footer from '../Components/Footer';



const CategoryDetailPage = () => {

    const categoryID = getParam();

    const [books, setBooks] = useState([]);

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await getBooksByCategoryID(categoryID);
                setBooks(response.books);
                console.log(response.books);
            } catch (error) {
                console.error('Error fetching books:', error);
            }
        };

        fetchBooks();
    }, [categoryID]);




    const headlines = 'সাহিত্যের আঁতুড়ঘর। সাহিত্যের সঠিক মূল্যায়ন করে পাঠকের কাছে উন্মুক্ত করে দেয়ার গুরুদায়িত্ব এই প্রকাশকদের। কেবল বই প্রকাশ নয়,ভালো মানের সাহিত্য বই আকারে নিয়মিত প্রকাশ করে প্রকাশকরা সাহিত্যের ধারা সচলভাবে অব্যাহত রাখেন। পাণ্ডুলিপি,ছাপা,মুদ্রণপ্রমাদ,সব বাঁধা-ত্যাগ-তিতিক্ষা পার করে যখন একটি বাঁধাই করা বই,এক টুকরো সাহিত্য ফসল পাঠকের সাহিত্য রসের ক্ষুধা পূরণ করে তখনই প্রকাশক সার্থক। প্রকাশকদের এই সাহিত্যধারার ট্রেনের সহযাত্রী হয়ে তাই রয়েছে রকমারি ডট কম। রকমারি ডট কম প্রকাশকদের সুযোগ করে দিচ্ছে আধুনিক সাহিত্যের রেনেসাঁর,যেখানে সাধারণ পাঠক আর প্রকাশকের মাঝে সেতুবন্ধন হিসেবে কাজ করবে রকমারি। ';
    const decodedCategoryID = decodeURIComponent(categoryID);
    const title = `${decodedCategoryID} বিষয়ের সকল বই`;

    return (
        <div>
            <CustomNavbar />
            <AllCard product={books} component={Card} headlines={headlines} headTitle={title} />
            <Footer />
        </div>
    )
}

export default CategoryDetailPage