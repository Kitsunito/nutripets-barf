import { useState, useContext } from 'react'
import { Link } from 'react-router-dom';
import Badge from '@mui/material/Badge';
import Stack from '@mui/material/Stack';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';
import CartContext from '../../context/CartContext';
import "./ShoppingCartWidget.css"


const CartWidget = () => {

    const { cartProducts, removeProduct } = useContext(CartContext);
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const numberFormat = new Intl.NumberFormat('es-co', { style: 'currency', currency: 'COP' })

    return (
        <div className='cart-button'>
            <Stack spacing={2} direction="row">
                <Badge badgeContent={cartProducts.length} color="primary">
                    <ShoppingCartTwoToneIcon 
                        onClick={handleClick}
                        color="action" fontSize="large"
                        aria-controls={open ? 'account-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                    />
                </Badge>
            </Stack>
            <Menu
                anchorEl={ anchorEl }
                id="account-menu"
                className='cart-modal'
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                elevation: 0,
                sx: {
                    overflow: 'visible',
                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                    mt: 1.5,
                    '& .MuiAvatar-root': {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                    },
                    '&:before': {
                    content: '""',
                    display: 'block',
                    position: 'absolute',
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: 'background.paper',
                    transform: 'translateY(-50%) rotate(45deg)',
                    zIndex: 0,
                    },
                    },
                    }}
                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <h3>Carrito de Compras</h3>
                <Divider />
                {cartProducts.map( (cartProduct) => {
                    return(
                        <MenuItem className='item-cart-modal' key={cartProduct.id}>
                            <div className='item-cart-modal__img'>
                                <img src={`../img/${cartProduct.image}`} /> 
                            </div>
                            <div className='item-cart-modal__data'>
                                <h4>{cartProduct.name}</h4>
                                <p>{numberFormat.format(cartProduct.price)}</p>
                                <p>Cantidad: {cartProduct.quantity}</p>
                                <p className='item-cart-modal__data-price'>
                                    Subtotal: {numberFormat.format(cartProduct.price * cartProduct.quantity)}
                                </p>
                            </div>
                            <div className='item-cart-modal__action'>
                                <DeleteIcon 
                                onClick={(e) => {
                                    e.preventDefault();
                                    removeProduct(cartProduct.id);
                                }}/>
                            </div>
                        </MenuItem>
                    )
                })}
                <Divider />
                <div className='footer-modal-cart'>
                    <Button variant="contained" className="btn-custom"><Link to="/cart">Ir a la caja</Link></Button>
                </div>
            </Menu>
        </div>
    )
}

export default CartWidget;