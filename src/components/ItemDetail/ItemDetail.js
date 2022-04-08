import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const ItemDetail = (product) => {
    const {name, presentation, description, price, pictureURL, stock} = product;

    const [quantity, setQuantity] = useState(0);

    const agregarCarrito = (e,cantidad) => {
        e.stopPropagation();
        setQuantity(cantidad);
    }

    return (
        <div className='item-datail'>
            <div className='item-img'>
                <img src={"../../" + pictureURL} alt={name}></img>
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
                            <Typography className="text-center"  sx={{ fontSize: 13 }} color="text.secondary" gutterBottom>
                                Cantidad elegida: {quantity}
                            </Typography>
                            <Button variant="contained">
                                <Link to={'/cart'}>Terminar la compra</Link>
                            </Button>
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