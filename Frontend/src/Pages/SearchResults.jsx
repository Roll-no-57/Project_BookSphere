import React from 'react'
import CustomNavbar from '../Components/Navbar';
import AllCard from '../Components/AllCard';
import Footer from '../Components/Footer';
import { getSearchBooks, getSearchAuthors, getSearchCategories } from './API';
import { useState, useEffect } from 'react';
import { getParam } from './Utils';
import Card from '../Components/Card';
import AuthorCard from '../Components/AuthorCard';
import CategoryCard from '../Components/CategoryCard';
import FloatingDivWrapper from '../Components/FloatingDivWrapper';

const SearchResults = () => {

  const search = getParam();

  const [searchBooks, setSearchBooks] = useState([]);
  const [searchAuthors, setSearchAuthors] = useState(null);
  const [searchCategories, setSearchCategories] = useState(null);
  // const [searchPublishers, setSearchPublishers] = useState(null);


  const fetchSearchResults = async () => {
    try {

      const responseBooks = await getSearchBooks(search);
      setSearchBooks(responseBooks.books);

      const responseAuthors = await getSearchAuthors(search);
      setSearchAuthors(responseAuthors.authors);

      const responseCategories = await getSearchCategories(search);
      setSearchCategories(responseCategories.categories);


    }
    catch (error) {
      console.error('Search results fetch failed:', error);
    }
  }

  useEffect(() => {

    fetchSearchResults();
    console.log(searchBooks);
    console.log(searchAuthors);
    console.log(searchCategories);

  }, []);



  const headlines = 'Here is your search results: ';


  return (
    <>
      <CustomNavbar />
      {
        searchBooks && searchBooks.length > 0 ?
          <AllCard product={searchBooks} component={Card} headlines={headlines} headTitle={'বই সমূহ'} />
          : null
      }
      {
        searchAuthors && searchAuthors.length > 0 ?
          <AllCard product={searchAuthors} component={AuthorCard} headlines={headlines} headTitle={'লেখক সমূহ'} />
          : null
      }
      {
        searchCategories && searchCategories.length > 0 ?
          <AllCard product={searchCategories} component={CategoryCard} headlines={headlines} headTitle={'বিষয় সমূহ'} />
          : null
      }
      {
        searchBooks && searchBooks.length === 0 && searchAuthors && searchAuthors.length === 0 && searchCategories && searchCategories.length === 0 ?
          <div>
            <FloatingDivWrapper>
              <h1>Sorry, no results found</h1>
              <h2>Try for another one</h2>

            </FloatingDivWrapper>

          </div>

          : null
      }
      <Footer />
    </>
  )
}

export default SearchResults