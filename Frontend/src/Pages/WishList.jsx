import React, { useState, useEffect } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import WishCard from '../Components/wishCard'; // Capitalized the component name
import { getWishlistByUserID, deleteBookFromWishlist } from './API';

const Wishlist = () => {

    const [products, setProducts] = useState([]);

    const fetchWishList = async () => {
        const response = await getWishlistByUserID();
        setProducts(response.wishlist);
    }

    useEffect(() => {
        fetchWishList();
    }, []);

    const removeFromWishlist = async (bookID) => {
        await deleteBookFromWishlist(bookID);
        fetchWishList();
    }


    return (
        <WishCard removeFromWishlist={removeFromWishlist} products={products} />
    )
}

export default Wishlist;
