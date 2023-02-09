import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Homepage from './components/pages/Home/HomePg';
import FlashSale from './components/pages/Home/FlashSale';
import Notification from './components/pages/Notification/Notification';
import Favorite from './components/pages/Home/Favorite';
import ProductDetail from './components/pages/Home/ProductDetail';
import ProductReviews from './components/pages/Review/ProductReviews';
import WriteReview from './components/pages/Review/WriteReview';
import Explore from './components/pages/Explore/Explore';
import SearchResult from './components/pages/Explore/SearchResult';
import Category from './components/pages/Explore/Category';
import Filter from './components/pages/Explore/Filter';
import SignIn from './components/pages/Auth/SignIn';
import SignUp from './components/pages/Auth/SignUp';
import Cart from './components/pages/Cart/Cart';
import ShipTo from './components/pages/Cart/ShipTo';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='Notification' element={<Notification />} />
          <Route path='Favorite' element={<Favorite />} />
          <Route path='FlashSale' element={<FlashSale />} /> 
          <Route path='ProductDetail' element={<ProductDetail />} />
          <Route path='ProductReviews' element={<ProductReviews />}/>
          <Route path="WriteReview" element={<WriteReview />} />
          <Route path='Explore' element={<Explore/>} />
          <Route path='SearchResult' element={<SearchResult />} />
          <Route path='Category' element={<Category />} />
          <Route path='Filter' element={<Filter />} />
          <Route path='SignIn' element={<SignIn />}/>
          <Route path='SignUp' element={<SignUp/>}/>
          <Route path='Cart' element={<Cart />}/>
          <Route path='ShipTo' element={<ShipTo/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;


