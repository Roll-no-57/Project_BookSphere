import React from 'react'
import AuthorDetail from '../Components/AuthorDetail'
import FloatingDivWrapper from '../Components/FloatingDivWrapper'
import AllCard from '../Components/AllCard'
import CustomNavbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Card from '../Components/Card'
import { getParam } from './Utils'
import { getAuthorByID ,getBooksByAuthorID} from './API'
import { useEffect, useState } from 'react'


const AuthorDetailPage = () => {



    // get the author id from the URL using the getParam function
    const authorID = getParam();

    // retriving data for a single author from the database
    const [author , setAuthor] = useState([]);

    const fetchAuthor = async () =>{
        try{
            const response = await getAuthorByID(authorID);
            setAuthor(response.author);
        }
        catch(error){
            console.error('Error fetching author:', error);
        }
    }


    // retriving data for all books of a single author from the database
    const [products, setProducts] = useState([]);

    const fetchProducts = async () => {
        try {
            const response = await getBooksByAuthorID(authorID);
            setProducts(response.books);
        } catch (error) {
            console.error('Error fetching books:', error);
        }
    }



    useEffect(() => {
        fetchAuthor();
        fetchProducts();
    }, []);



    const authorDetailInfo = {
        name: author.NAME,
        image: author.IMAGE,
        followers: 1200,
        description: author.DESCRIPTION,
    }




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

export default AuthorDetailPage