import React, { useEffect, useState } from 'react';
import CartCard from '../Components/cartCard';


import { getUserPickedBooks } from './API';


const CartPage = () => {

    const [books, setBooks] = React.useState([]);

    const fetchBooks = async () => {
        const response = await getUserPickedBooks();
        setBooks(response.picked);
    }

    const  deleteBook=async ()=> {
        fetchBooks();
    }

    useEffect(() => {
        fetchBooks();
    }, []);



    return (
        <div>
            {

                books.map((book, index) => {
                    return <CartCard product={book} key={index} deleteBook={deleteBook}/>
                })

            }

            {
                books.length === 0 ?
                    <h3>No books in cart</h3>
                    :
                    <div className="user-info d-flex justify-content-between">
                        <h3>Proceed to checkout</h3>
                        <a class="btn btn-danger ms-2" href="/my-section/checkoutPage">
                            <i class="bi bi-pencil-square"></i>
                            Place Order
                        </a>
                    </div>
            }




        </div>
    );
};

export default CartPage;
