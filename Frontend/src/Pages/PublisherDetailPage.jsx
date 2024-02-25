import React from 'react'
import AuthorDetail from '../Components/AuthorDetail'
import FloatingDivWrapper from '../Components/FloatingDivWrapper'
import AllCard from '../Components/AllCard'
import CustomNavbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Card from '../Components/Card'
import { getPublisherByID, getBooksByPublisherID } from './API'
import { useEffect, useState } from 'react'
import { getParam } from './Utils'


const PublisherDetailPage = () => {

    const publisherID = getParam();

    const [publisher, setpublisher] = useState([]);

    const fetchPublisher = async () => {
        const response = await getPublisherByID(publisherID, {});
        setpublisher(response.publisher);
    }


    const [products, setProducts] = useState([]);

    const fetchProducts = async () => {
        const response = await getBooksByPublisherID(publisherID, {});
        setProducts(response.books);
    }


    useEffect(() => {
        fetchPublisher();
        fetchProducts();
    }, []);



    const publisherDetailInfo = {
        name: publisher.NAME,
        image: publisher.IMAGE,
        followers: 1240,
        description: publisher.DESCRIPTION,
    }



    const headlines = 'লক্ষাধিক বইয়ের সংগ্রহ রকমারি ডট কমে। বইয়ের এই বিশাল সমুদ্র-মন্থনে পাঠকের সুবিধার্থে প্রায় ৫০ টির মতো ক্যাটাগরি ও সহস্রাধিক বিষয়ভিত্তিক ক্যাটাগরি রয়েছে রকমারি ডট কমে। যার ফলে খুব সহজেই পাঠক তার পছন্দের ক্যাটাগরি বেছে নিয়ে নির্দিষ্ট বিষয়ভিত্তিক বইগুলো খুঁজে পাবে খুব সহজেই। রকমারি ডট কমের এই বিশাল বইয়ের সমুদ্রে জ্ঞানের জাহাজের নাবিক হতে আপনাকে নিমন্ত্রণ। মানচিত্রটা ধরা আছে নিচেই... ';




    return (
        <div>

            <CustomNavbar />
            <FloatingDivWrapper>
                <AuthorDetail {...publisherDetailInfo} />
            </FloatingDivWrapper>
            <AllCard product={products} component={Card} headlines={headlines} headTitle={'লেখকের সকল বই'} />
            <Footer />

        </div>
    )
}

export default PublisherDetailPage