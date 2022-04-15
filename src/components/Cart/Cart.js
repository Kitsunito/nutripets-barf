import { useState, useContext } from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import CartContext from '../../context/CartContext';
import './Cart.css';

const Cart = () => {

    const { cartProducts, removeProduct, total } = useContext(CartContext);

    return (
        <div>
            <Box sx={{ width: '100%' }} >
                <Stack spacing={0}>
                    {cartProducts.map( (cartProduct) => {
                        return (<>
                        <Box key={cartProduct.id} className="item-container">
                            <div className="item-section">
                                <img src={`./${cartProduct.imageURL}`} /> 
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
                        <p>TOTAL: {total()}</p>
                    </Box>
                </Stack>
            </Box>
        </div>
    )
}

export default Cart;