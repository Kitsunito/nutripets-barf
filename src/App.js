import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

//Components
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './pages/Cart/Cart'

//Pages
import Contact from './pages/Contact';
import DietaBarf from './pages/DietaBarf';
import Nosotros from './pages/Nosotros';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer greetings="Más vendidos"/>} />
          <Route path="/dieta-barf" element={<DietaBarf />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/contacto" element={<Contact/>} />
          <Route path="/category/:id" element={<ItemListContainer />}/>
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
