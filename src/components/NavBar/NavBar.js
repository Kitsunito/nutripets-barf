import { useContext, useState } from 'react';
import Button from '@mui/material/Button';
import './NavBar.css';
import CartWidget from '../ShoppingCartWidget/ShoppingCartWidget';
import CategoriesButton from '../CategoriesButton/CategoriesButton'
import { Link} from 'react-router-dom';
import CartContext from '../../context/CartContext';

export default function NavBar(props) {

    const {cartProducts} = useContext(CartContext);

    return (
        <header className="main-header">
            <div className="nav-img">
                <Link to={'/'}>
                    <img src="logo.png" alt="logo" className="img-header"></img>
                </Link>
            </div>
            <nav>
                <ul className="navMenu">
                    <li>
                        <Button size="large" color="primary">
                            <Link to={'/'}>Inicio</Link>
                        </Button>
                    </li>
                    <li>
                        <CategoriesButton size="large" color="info">
                            Productos
                        </CategoriesButton>
                    </li>
                    <li>
                        <Button size="large" color="info">
                            <Link to={'/nosotros'}>Nosotros</Link>
                        </Button>
                    </li>
                    <li>
                        <Button size="large" color="info">
                            <Link to={'/dieta-barf'}>Dieta BARF</Link>
                        </Button>
                    </li>
                    <li>
                        <Button size="large" color="info">
                            <Link to={'/contacto'}>Contáctanos</Link>
                        </Button>
                    </li>
                </ul>
                <div className="area-profile">
                    {cartProducts.length ? 
                                        <div className="profile-section">
                                            <CartWidget />
                                        </div>
                    : ""
                    }

                </div>
            </nav>
        </header>
    );
}