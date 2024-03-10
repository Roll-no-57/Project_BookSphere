// necessary dependencies
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';


// import Pages 
import Home from './Pages/Home';
import loginPage from './Pages/loginPage';
import registration from './Pages/SignUp';
import Orders from './Pages/Orders';
import Books from './Pages/Books';
import addBooks from './Pages/addBooks';
import Author from './Pages/Author';
import Publisher from './Pages/Publisher';
import Voucher from './Pages/voucher';



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

          <Route path='/orders' Component={Orders} />

          <Route path='/book' Component={Books} />

          <Route path='/author' Component={Author} />

          <Route path='/publisher' Component={Publisher} />

          <Route path='/category' Component={Voucher} />

          <Route path='/addbook' Component={addBooks} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
