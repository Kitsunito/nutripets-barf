import { useState, useContext } from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import DeleteIcon from '@mui/icons-material/Delete';
import CartContext from '../../context/CartContext';
import './Cart.css';

const Cart = () => {

    const { cartProducts, removeProduct, totalPrice } = useContext(CartContext);

    return (
        <div>
            <Box className="cart-container" >
                <div className="cart-header">
                    <h2>Producto</h2>
                    <h2>Descripción</h2>
                    <h2>Cantidad</h2>
                    <h2>Precio Unitario</h2>
                    <h2>Quitar</h2>
                </div>
                <Stack spacing={1}>
                    {cartProducts.map( (cartProduct) => {
                        return (<>
                        <Box key={cartProduct.id} className="item-container">
                            <div className="item-details-img">
                                <img src={`../img/${cartProduct.image}`} /> 
                            </div>
                            <div className="item-details item-section">
                                <p>{cartProduct.name}</p>
                                <span>$ {cartProduct.price}</span>
                                <span>Cantidad: {cartProduct.quantity}</span>
                            </div>
                            <div className="item-section">
                                <p>Subtotal: $ {cartProduct.price * cartProduct.quantity}</p>
                            </div>
                            <div className="item-section">
                                <DeleteIcon 
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
                    <Box>
                        <p>TOTAL: {totalPrice()}</p>
                    </Box>
                </Stack>
            </Box>
        </div>
    )
}

export default Cart;