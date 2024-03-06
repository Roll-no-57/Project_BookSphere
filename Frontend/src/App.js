import Home from './Pages/Home';
import BookDetail from './Pages/BookDetail';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import AllBooks from './Pages/AllBooks';
import AllAuthors from './Pages/AllAuthors';
import AllCategories from './Pages/AllCategories';
import AuthorDetailPage from './Pages/AuthorDetailPage';
import AllPublishers from './Pages/AllPublisher';
import PublisherDetailPage from './Pages/PublisherDetailPage';
import User from './Pages/User';
import wishlist from './Pages/WishList';
import orders from './Pages/Orders';
import reviews from './Pages/Reviews';
import loginPage from './Pages/loginPage';
import registration from './Pages/SignUp';
import MyCart from './Pages/cartPage';
import Checkout from './Pages/CheckoutPage';
import CategoryDetailPage from './Pages/CategoryDetailPage';
import Aboutus from './Pages/About_us';
// import Trackorders from './Pages/Trackorders';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}


function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>

          <Route path='/registration' Component={registration} />
          <Route path='/' Component={loginPage} />
          <Route path='' Component={loginPage} />

          <Route path='/home' Component={Home} />
          {/* <Route path='' Component={Home} /> */}
          <Route path='/book' Component={AllBooks} />
          <Route path='/book/:id' Component={BookDetail} />

          <Route path='/author' Component={AllAuthors} />
          <Route path='/author/:id' Component={AuthorDetailPage} />

          <Route path='/category' Component={AllCategories} />
          <Route path='/category/:id' Component={CategoryDetailPage}/>

          <Route path='/publisher' Component={AllPublishers} />
          <Route path='/publisher/:id' Component={PublisherDetailPage} />

          <Route path='/about-us' Component={Aboutus} />

          <Route path='/my-section/profile' Component={User} />
          <Route path='/my-section/orders' Component={orders} />
          <Route path='/my-section/wishlist' Component={wishlist} />
          <Route path='/my-section/reviews' Component={reviews} />
          {/* <Route path='/my-section/my-following' Component={following} /> */}
          <Route path='/my-section/cart' Component={MyCart}/>
          <Route path = '/my-section/checkoutPage' Component={Checkout}/>
          {/* <Route path='/my-section/track-order' Component={Trackorders}/> */}


        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
