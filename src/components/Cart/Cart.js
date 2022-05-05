import {useContext } from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import DeleteIcon from '@mui/icons-material/Delete';
import CartContext from '../../context/CartContext';
import './Cart.css';

const Cart = () => {

    const { cartProducts, removeProduct, totalPrice } = useContext(CartContext);

    const numberFormat = new Intl.NumberFormat('es-co', { style: 'currency', currency: 'COP' })

    return (
        <div>
            <Box className="cart-container" >
                <div className="cart-header">
                    <h2>Producto</h2>
                    <h2>Descripción</h2>
                    <h2>Cantidad</h2>
                    <h2>Subtotal</h2>
                    <h2>Quitar</h2>
                </div>
                <Stack spacing={1}>
                    {cartProducts.map( (cartProduct) => {
                        return (<>
                        <Box key={cartProduct.id} className="item-container">
                            <div className="item-details-img">
                                <img src={`../img/${cartProduct.image}`} alt={cartProduct.name} /> 
                            </div>
                            <div className="item-details item-section">
                                <p>{cartProduct.name}</p>
                                <span>Precio Unitario: {numberFormat.format(cartProduct.price)}</span>
                            </div>
                            <div className="item-section">
                                <span>{cartProduct.quantity}</span>
                            </div>
                            <div className="item-section">
                                <p>{numberFormat.format(cartProduct.price * cartProduct.quantity)}</p>
                            </div>
                            <div className="item-section">
                                <DeleteIcon
                                    className='item-icon'
                                    onClick={(e) => {
                                        e.preventDefault();
                                        removeProduct(cartProduct.id);
                                    }}/>
                            </div>
                        </Box>
                        <Divider />
                        </>)
                    })
                    }
                    <Box className="total-container">
                        <p>TOTAL: {numberFormat.format(totalPrice())}</p>
                    </Box>
                </Stack>
            </Box>
        </div>
    )
}

export default Cart;