import React, { useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import MyOrderCard from '../Components/MyorderCard'; // Capitalized the component name


const MyOrders = () => {
    const products = [
        { id: 1, name: 'Product 1', author: 'Apurbo Hossain', price: '$10.00', image: '/images/book1.jpg' },
        { id: 2, name: 'Product 2', author: 'Apurbo Hossain', price: '$15.00', image: '/images/book2.jpg' },
        { id: 3, name: 'Product 3', author: 'Apurbo Hossain', price: '$20.00', image: '/images/book1.jpg' },
        { id: 4, name: 'Product 4', author: 'Apurbo Hossain', price: '$25.00', image: '/images/book1.jpg' },
        { id: 2, name: 'Product 2', author: 'Apurbo Hossain', price: '$15.00', image: '/images/book2.jpg' },
        { id: 2, name: 'Product 2', author: 'Apurbo Hossain', price: '$15.00', image: '/images/book2.jpg' },
        { id: 5, name: 'Product 5', author: 'Apurbo Hossain', price: '$30.00', image: '/images/book1.jpg' },
        { id: 2, name: 'Product 2', author: 'Apurbo Hossain', price: '$15.00', image: '/images/book2.jpg' },
        { id: 2, name: 'Product 2', author: 'Apurbo Hossain', price: '$15.00', image: '/images/book2.jpg' },
        { id: 2, name: 'Product 2', author: 'Apurbo Hossain', price: '$15.00', image: '/images/book2.jpg' },
    ];


    return (
        <div className=' d-flex flex-wrap'>
            {products.map((book, index) => (
                <MyOrderCard
                    key={index}
                    book={book}
                    index={index}
                    id={index + 1}
                    date="12/12/2021"
                />
            ))}
        </div>
    )
}

export default MyOrders;
