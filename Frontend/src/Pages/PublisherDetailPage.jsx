import React from 'react'
import AuthorDetail from '../Components/AuthorDetail'
import FloatingDivWrapper from '../Components/FloatingDivWrapper'
import AllCard from '../Components/AllCard'
import CustomNavbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Card from '../Components/Card'


const PublisherDetailPage = () => {
    const authorDetailInfo = {
        name: "Apurbo",
        image: "/images/publishing.png",
        followers: 1.1,
        description: "As an individual, you are a curious and ambitious learner, always eager to explore new ideas and acquire knowledge. Your passion for continuous growth drives you to seek out challenges and opportunities for personal and professional development. With a keen eye for detail and a systematic approach to problem-solving, you excel in analyzing complex concepts and finding innovative solutions. Your strong communication skills enable you to effectively articulate your thoughts and ideas, fostering meaningful connections with others. As a team player, you thrive in collaborative environments, valuing diversity and respecting different perspectives. Your adaptability and resilience empower you to navigate through various situations with grace and determination. Committed to making a positive impact, you are driven by a sense of purpose and strive to contribute to the betterment of your community and the world at large. In essence, you are a dynamic and multifaceted individual, motivated by a relentless pursuit of growth, excellence, and meaningful connections."
    }

    const products = [
        { id: 1, name: 'Product 1', author: 'Apurbo Hossain', price: '$10.00', image: '/images/book1.jpg' },
        { id: 2, name: 'Product 2', author: 'Apurbo Hossain', price: '$15.00', image: '/images/book1.jpg' },
        { id: 3, name: 'Product 3', author: 'Apurbo Hossain', price: '$20.00', image: '/images/book1.jpg' },
        { id: 3, name: 'Product 3', author: 'Apurbo Hossain', price: '$20.00', image: '/images/book1.jpg' },
        { id: 3, name: 'Product 3', author: 'Apurbo Hossain', price: '$20.00', image: '/images/book2.jpg' },
        { id: 3, name: 'Product 3', author: 'Apurbo Hossain', price: '$20.00', image: '/images/book2.jpg' },

    ];


    const headlines = 'লক্ষাধিক বইয়ের সংগ্রহ রকমারি ডট কমে। বইয়ের এই বিশাল সমুদ্র-মন্থনে পাঠকের সুবিধার্থে প্রায় ৫০ টির মতো ক্যাটাগরি ও সহস্রাধিক বিষয়ভিত্তিক ক্যাটাগরি রয়েছে রকমারি ডট কমে। যার ফলে খুব সহজেই পাঠক তার পছন্দের ক্যাটাগরি বেছে নিয়ে নির্দিষ্ট বিষয়ভিত্তিক বইগুলো খুঁজে পাবে খুব সহজেই। রকমারি ডট কমের এই বিশাল বইয়ের সমুদ্রে জ্ঞানের জাহাজের নাবিক হতে আপনাকে নিমন্ত্রণ। মানচিত্রটা ধরা আছে নিচেই... ';




    return (
        <div>
            
            <CustomNavbar />
            <FloatingDivWrapper>
                <AuthorDetail {...authorDetailInfo} />
            </FloatingDivWrapper>
            <AllCard product={products} component={Card} headlines={headlines} headTitle={'লেখকের সকল বই'} />
            <Footer />

        </div>
    )
}

export default PublisherDetailPage