//Hooks 
import { useState, useContext } from 'react'

//Contexts
import CartContext from '../../context/CartContext';

//Components
import Badge from '@mui/material/Badge';
import Stack from '@mui/material/Stack';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import { Link } from 'react-router-dom';

//Style
import "./ShoppingCartWidget.css"


const CartWidget = () => {

    const { cartProducts, removeProduct } = useContext(CartContext);
    
    const open = Boolean(anchorEl);

    //-----States-----
    const [anchorEl, setAnchorEl] = useState(null);

    //-----Functions-----
    /*Esta función permite desplegar el Menu en función de hacer click*/
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    /*Esta función maneja el cierre del Menu*/
    const handleClose = () => {
        setAnchorEl(null);
    };

    //Utilizamos el objeto Intl para establecer el formato de moneda en Pesos Colombianos.
    const numberFormat = new Intl.NumberFormat('es-co', { style: 'currency', currency: 'COP' })

    return (
        <div className='cart-button'>
            <Stack spacing={3} direction="row" className='shopping-cart-badge'>
                {/*Mostramos el número de ítems distintos en el carrito en una Badge*/}
                <Badge
                    badgeContent={cartProducts.length} 
                    className="shopping-cart-quantity"
                    color="warning">
                    {/*Utilizamos el ícono como elemento con el evento que despliegue el Menu*/}
                    <ShoppingCartRoundedIcon
                        onClick={handleClick}
                        fontSize="medium"
                        aria-controls={open ? 'account-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        className="shopping-cart-icon"
                        sx={{color: '#0288d1'}}
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
                {
                //Mostramos un MenuItem por cada elemento que tenga el carrito
                cartProducts.map( (cartProduct) => {
                    return(
                        <MenuItem className='item-cart-modal' key={cartProduct.id}>
                            <div className='item-cart-modal__img'>
                                <img src={`../img/${cartProduct.image}`} alt={cartProduct.name} /> 
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
                                className="shopping-cart-icon"
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
                    {/*Mostramos un botón que nos permite finalizar la compra*/}
                    <Button variant="contained" className="btn-custom"><Link to="/cart">Ir a la caja</Link></Button>
                </div>
            </Menu>
        </div>
    )
}

export default CartWidget;