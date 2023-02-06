import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Homepage from './components/pages/Home/HomePg';
import FlashSale from './components/pages/Home/FlashSale';
import Notification from './components/pages/Notification/Notification';
import Favorite from './components/pages/Home/Favorite';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='Notification' element={<Notification />} />
          <Route path='Favorite' element={<Favorite />} />
          <Route path='FlashSale' element={<FlashSale />} /> 
      </Routes>
    </BrowserRouter>
  )
}

export default App;


