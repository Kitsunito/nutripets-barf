import { useContext,useState } from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css';
import { Link } from 'react-router-dom';
import CartContext from '../../context/CartContext';

const ItemDetail = (product) => {

    const {addProductToCart} = useContext(CartContext);

    const {name, presentation, description, price, image, stock} = product;

    const [quantity, setQuantity] = useState(0);

    const agregarCarrito = (e,cantidad) => {
        e.stopPropagation();
        setQuantity(cantidad);
        addProductToCart({...product, quantity: cantidad});
        
    }

    return (
        <div className='item-datail'>
            <div className='item-img'>
                <img src={"../img/" + image} alt={name}></img>
            </div>
            <div className='item-description'>
                <Typography className="text-center"  variant="h3" component="div">
                    {name}
                </Typography>
                <Typography className="text-center"  variant="h5" component="div">
                    $ {price}
                </Typography>
                <Typography className="text-center"  variant="string" component="div">
                    {description}
                </Typography>
                <Typography className="text-center"  variant="string" component="div">
                    {presentation}
                </Typography>
                {
                    quantity > 0 ? (
                        <>
                            <div className="item-count">
                                <Typography className="text-center"  sx={{ fontSize: 13 }} color="text.secondary" gutterBottom>
                                    Cantidad elegida: {quantity}
                                </Typography>
                            </div>
                            <div className="item-count-button">
                                <Button variant="contained" className="finish-button">
                                    <Link to={'/cart'}>Terminar la compra</Link>
                                </Button>
                            </div>
                        </>
                    ) : (
                        <ItemCount stock={stock} action={agregarCarrito}/>
                    )
                }

            </div>
        </div>

    );
}

export default ItemDetail;