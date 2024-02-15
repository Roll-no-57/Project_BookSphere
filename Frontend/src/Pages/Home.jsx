import React, { useState, useEffect } from 'react';

import { getBooks } from './API';

const Home = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await getBooks();
        setBooks(response.books);
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };

    fetchBooks();
  }, []);

  return (
    <div>
      <div>
        <h1>Book List</h1>
        <div>
          {books.map((book, index) => (
            <div key={index}>
              <h2>{book.NAME}</h2>
              <p>ID: {book.ID}</p>
              <p>Author ID: {book.AUTHOR_ID}</p>
              <p>Publisher ID: {book.PUBLISHER_ID}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
