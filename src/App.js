import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

//Components
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer'

//Pages
import NotFound from './pages/NotFound/NotFound'
import CartPage from './pages/CartPage/CartPage'
import ItemListContainer from './pages/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './pages/ItemDetailContainer/ItemDetailContainer';

//Context
import { CartProvider } from './context/CartContext';

function App() {

  return (

    <div className="App">
      <CartProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer greetings="Más vendidos"/>} />
            <Route path="/category/:category" element={<ItemListContainer />}/>
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
