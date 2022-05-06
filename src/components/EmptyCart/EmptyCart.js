//Components
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

//Style
import './EmptyCart.css'

const NoItems = () => {

    return (
        <div className="empty-cart-container">
            <div>
                <p>No hay items en el carrito</p>
                <Button variant="contained" 
                    className="btn-custom">
                        <Link to="/">Ir a la tienda</Link>
                </Button>
            </div>

        </div>
    )
}

export default NoItems;