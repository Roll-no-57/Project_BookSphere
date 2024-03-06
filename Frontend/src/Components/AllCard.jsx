import React, { useState } from 'react';
import FloatingDivWrapper from './FloatingDivWrapper';
import Pagination from 'react-bootstrap/Pagination';
import './AllCard.css';

const AllCard = (props) => {
    const { product, link, component: CustomCard, headlines, headTitle, } = props;

    const [currentPage, setCurrentPage] = useState(1);
    const productPerPage = 20; // Change to 5 to display 5 books per row


    const indexOfFirstproduct = productPerPage * (currentPage - 1);
    const indexOfLastproduct = indexOfFirstproduct + productPerPage;

    const currentproducts = product.slice(indexOfFirstproduct, indexOfLastproduct);
    const totalPages = Math.ceil(product.length / productPerPage);
    const showPagination = totalPages > 5 ? 5 : totalPages;



    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <div>
            <FloatingDivWrapper>
                <h1 style={{ textAlign: 'center' }}>{headTitle}</h1>
                <hr />
                <h4>
                    <p>{headlines}</p>
                </h4>
                <hr />
            </FloatingDivWrapper>


            <FloatingDivWrapper>
                {/* Pass props to CustomCard */}

                <div className="container " >
                    {
                        currentproducts.map((currproduct, index) => (
                            <div key={index}>
                                <CustomCard
                                    link={link}
                                    key={currproduct.ID}
                                    {...currproduct}
                                />
                            </div>
                        ))
                    }
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
        </div>
    );
};

export default AllCard;
