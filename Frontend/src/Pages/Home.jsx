import React, { useEffect } from 'react';
import CustomNavbar from '../Components/Navbar';
import Customcarousel from '../Components/Carousals';
import MultiCarousel from '../Components/Multicarousel';
import Card from '../Components/Card';
import CategoryCard from '../Components/CategoryCard';
import AuthorCard from '../Components/AuthorCard';
import Footer from '../Components/Footer';
import BookPage from '../Components/BookPage';
import { getBestSellerBook  ,getBestSellerAuthor ,getMostReviewed} from './API';

const Home = () => {


  const [bestSeller, setBestSeller] = React.useState([]);
  const [bestSellerAuthor, setBestSellerAuthor] = React.useState([]);
  const [mostReviewed, setMostReviewed] = React.useState([]);

  const fetch = async () => {
    const response = await getBestSellerBook();
    setBestSeller(response.data);

    const responseAuthor  = await getBestSellerAuthor();
    setBestSellerAuthor(responseAuthor.data);

    const responseMostReviewed = await getMostReviewed();
    setMostReviewed(responseMostReviewed.data);
  }

  useEffect(() => {
    fetch();
  }, []);









  return (
    <div>
      <CustomNavbar />

      <Customcarousel />

      <MultiCarousel component={Card} products={bestSeller} headLines={"Best Sellers"} />

      <MultiCarousel component={AuthorCard} products={bestSellerAuthor} headLines={"Best Seller Authors"} link={'author'}/>
      
      <MultiCarousel component={Card} products={mostReviewed} headLines={"Most Reviewed Books"} />

      {/* <MultiCarousel component={CategoryCard} products={CategoriesItems} headLines={"Categories"} /> */}


      <Footer />


    </div>
  );
}

export default Home;
