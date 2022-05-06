//Hooks 
import { useContext,useState } from 'react';

//Contexts
import CartContext from '../../context/CartContext';

//Components
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';

//Style
import './ItemDetail.css';

const ItemDetail = (product) => {

    const {addProductToCart} = useContext(CartContext);

    const {name, presentation, description, price, image, stock} = product;

    //-----States-----
    const [quantity, setQuantity] = useState(0);

    //-----Functions-----
    /*Esta función recibe como parámetro un evento y la cantidad. 
    Se pasa como prop al hijo ItemCount para que se etablezca el estado Quantity
    con el valor cantidad que recibe del hijo*/
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
                    //Valida que la cantidad sea mayor a 0
                    quantity > 0 ? (
                        <>
                            {/*En caso de serlo, muestra la cantidad elegida y permite terminar la compra */}
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
                        /*En caso de ser cero, renderiza el ItemCount y envía el stock y
                        el la función agregarCarrito al mismo */
                        <ItemCount stock={stock} action={agregarCarrito}/>
                    )
                }

            </div>
        </div>

    );
}

export default ItemDetail;