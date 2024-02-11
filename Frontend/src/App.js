import Home from './Pages/Home';
import BookDetail from './Pages/BookDetail';
import { BrowserRouter ,Routes ,Route} from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import AuthorDetailPage from './Pages/AuthorDetailPage';
import AllBookCard from './Components/AllBookCard';

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

          <Route path='' Component={Home} />
          <Route path='/' Component={Home} />

          <Route path='/book' Component={AllBookCard} />
          <Route path='/book/:id' Component={BookDetail} />

          <Route path='/author' Component={AuthorDetailPage} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
