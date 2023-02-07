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
      </Routes>
    </BrowserRouter>
  )
}

export default App;


