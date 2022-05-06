//Hooks 
import { useContext } from 'react';

//Contexts
import CartContext from '../../context/CartContext';

//Components
import Button from '@mui/material/Button';
import CartWidget from '../ShoppingCartWidget/ShoppingCartWidget';
import CategoriesButton from '../CategoriesButton/CategoriesButton'
import { Link} from 'react-router-dom';

//Style
import './NavBar.css';

export default function NavBar(props) {

    const {cartProducts} = useContext(CartContext);

    return (
        <header className="main-header">
            <div className="nav-img">
                <Link to={'/'}>
                    <img src="../../logo.png" alt="logo" className="img-header"></img>
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
                </ul>
                <div className="area-profile">
                    {
                    //Validamos que el vector CartProducts tenga elementos
                    cartProducts.length ?
                                        //De ser así, mostramos el CartWidget
                                        <div className="profile-section">
                                            <CartWidget />
                                        </div>
                    : 
                        //En caso contrario, no mostramos nada.
                        ""
                    }
                </div>
            </nav>
        </header>
    );
}