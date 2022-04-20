import { useContext } from 'react';
import Cart from '../../components/Cart/Cart';
import CartContext from '../../context/CartContext';
import NoItems from '../../components/EmptyCart/EmptyCart';

const CartPage = () => {

    const {cartProducts} = useContext(CartContext);

    return (
        <>
            { cartProducts.length  ? <Cart />: <NoItems /> }
        </>
    );
}

export default CartPage;