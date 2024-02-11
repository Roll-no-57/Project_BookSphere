import React, { useState } from 'react';
import FloatingDivWrapper from './FloatingDivWrapper';
import CustomCard from './Card'; // Update the import to use CustomCard
import Pagination from 'react-bootstrap/Pagination';

const AllBookCard = () => {
    const book = [
        {
            name: "The Great Gatsby",
            author: "F. Scott Fitzgerald",
            price: "$10",
            image: '/images/book1.jpg' // Remove extra space
        },
        {
            name: "The Great Gatsby",
            author: "F. Scott Fitzgerald",
            price: "$10",
            image: '/images/book1.jpg' // Remove extra space
        },
        {
            name: "The Great Gatsby",
            author: "F. Scott Fitzgerald",
            price: "$10",
            image: '/images/book1.jpg' // Remove extra space
        },
        {
            name: "The Great Gatsby",
            author: "F. Scott Fitzgerald",
            price: "$10",
            image: '/images/book1.jpg' // Remove extra space
        },
        {
            name: "The Great Gatsby",
            author: "F. Scott Fitzgerald",
            price: "$10",
            image: '/images/book1.jpg' // Remove extra space
        },
        {
            name: "The Great Gatsby",
            author: "F. Scott Fitzgerald",
            price: "$10",
            image: '/images/book1.jpg' // Remove extra space
        },
        {
            name: "The Great Gatsby",
            author: "F. Scott Fitzgerald",
            price: "$10",
            image: '/images/book1.jpg' // Remove extra space
        },
    ];

    const [currentPage, setCurrentPage] = useState(1);
    const bookPerPage = 20; // Change to 5 to display 5 books per row

    const indexOfFirstBook = bookPerPage * (currentPage - 1);
    const indexOfLastBook = indexOfFirstBook + bookPerPage;

    const currentBooks = book.slice(indexOfFirstBook, indexOfLastBook);
    const totalPages = Math.ceil(book.length / bookPerPage);
    const showPagination = totalPages > 5 ? 5 : totalPages;

    const renderBooks = () => {
        const rows = [];
        for (let i = 0; i < currentBooks.length; i += bookPerPage) {
            const row = currentBooks.slice(i, i + bookPerPage).map((currBook, index) => (
                <div className="col-md-3" key={index}>
                    <CustomCard
                        name={currBook.name}
                        author={currBook.author}
                        price={currBook.price}
                        image={currBook.image}
                    />
                </div>
            ));
            rows.push(<div className="row">{row}</div>);
        }
        return rows; // Return the rows array
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <FloatingDivWrapper>
            {/* Pass props to CustomCard */}
            <div className="container">
                {renderBooks()}
            </div>
            <div className="clearfix" style={{ marginTop: '20px', justifyContent: 'center', display: 'flex' }}>
                <Pagination>
                    <Pagination.Prev
                        onClick={() => { handlePageChange(currentPage - 1) }}
                        disabled={currentPage === 1}
                    />
                    {Array.from({ length: showPagination }).map((_, index) => (
                        <Pagination.Item
                            key={index + 1}
                            active={index + 1 === currentPage}
                            onClick={() => handlePageChange(index + 1)}
                        >
                            {index + 1}
                        </Pagination.Item>
                    ))}
                    {
                        totalPages > 5 &&
                        <>

                            <Pagination.Ellipsis />
                            <Pagination.Item
                                key={totalPages}
                                active={totalPages === currentPage}
                                onClick={() => handlePageChange(totalPages)}
                            >
                                {totalPages}
                            </Pagination.Item>
                        </>
                    }

                    <Pagination.Next
                        onClick={() => { handlePageChange(currentPage + 1) }}
                        disabled={currentPage === totalPages}
                    />
                </Pagination>
            </div >
        </FloatingDivWrapper>
    );
};

export default AllBookCard;
