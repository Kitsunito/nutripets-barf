import {createContext, useState} from 'react';

const CartContext = createContext();

const CartProvider = ({children}) => {
    const [cartProducts, setCartProducts] = useState([]);
    
    const addProductToCart = (product) => {
        
        if (isInCart(product.id)) {
            const prod = cartProducts.find((p) => p.id === product.id);
            
            //Actualizamos la cantidad del producto elegido al nuevo valor
            prod.quantity = product.quantity;

            const newCart = [...cartProducts];
            setCartProducts(newCart)
        } else {
            setCartProducts(cartProducts => [...cartProducts, product]);
        }
    }

    const removeProduct = (id) => {
        setCartProducts(cartProducts.filter(product => product.id !== id))
    }

    const clearCart = () => {
        setCartProducts([]);
    }

    const isInCart = (id) => {
        return cartProducts.some( prod => prod.id === id);
    }

    const total = () => {
        let total = 0;

        cartProducts.map( (product) => {
            total += (product.price * product.quantity)
        })

        return total;
    }

    const data = {
        cartProducts,
        addProductToCart,
        removeProduct,
        clearCart,
        total
    }

    return(
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}

export { CartProvider };
export default CartContext;