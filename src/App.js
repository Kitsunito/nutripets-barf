import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

//Components
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';


//Pages
import Contact from './pages/Contact';
import DietaBarf from './pages/DietaBarf';
import Nosotros from './pages/Nosotros';
import NotFound from './pages/NotFound/NotFound'
import CartPage from './pages/CartPage/CartPage'

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
            <Route path="/dieta-barf" element={<DietaBarf />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/contacto" element={<Contact/>} />
            <Route path="/category/:id" element={<ItemListContainer />}/>
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
