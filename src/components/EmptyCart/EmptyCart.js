import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const NoItems = () => {

    return (
        <div>
            <p>No hay items en el carrito</p>
            <Button className="btn-custom"><Link to="/">Ir a la tienda</Link></Button>
        </div>
    )
}

export default NoItems;