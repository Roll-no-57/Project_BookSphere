import React, { useState } from 'react';
import MyreviewCard from '../Components/MyreviewCard'; // Capitalized the component name

import { useEffect } from 'react';
import { getReviewsByUserID } from './API';


const Reviews = () => {




    const [reviews, setReviews] = useState([]);

    const fetchReviews = async () => {
        try {
            const response = await getReviewsByUserID();
            setReviews(response.reviews);
        }
        catch (error) {
            console.error('Error fetching reviews:', error);
        }
    }

    useEffect(() => {
        fetchReviews();
    }, []);




    return (
        <div >
            {
                reviews.map((review, index) => {
                    return <MyreviewCard key={index}
                        image={review.BOOK_IMAGE}
                        name={review.BOOK_TITLE}
                        review={review.REVIEW}
                        rating={review.STARS}
                        date={review.CREATED_AT}
                        book_id={review.BOOK_ID} />
                })
            }

        </div>

    )
}

export default Reviews;
