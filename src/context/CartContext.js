//Hooks 
import {useState} from 'react';

//Context
import {createContext} from 'react';

//Definimos la variable CartContext como contexto.
const CartContext = createContext();

const CartProvider = ({children}) => {

    //Instanciamos una variable con las funciones y estados que vamos a utilizar del contexto
    const data = {
        cartProducts,
        addProductToCart,
        removeProduct,
        clearCart,
        totalPrice
    }

    //-----States-----
    const [cartProducts, setCartProducts] = useState([]);
    
    //-----Functions-----
    /*Esta función valida si el elmento se encuentra en el carrito,
    si lo está, actualiza el elemento con la cantidad nueva y, si no lo está,
    agrega el elemento al array que compone el estado del carrito*/
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

    /* Esta función remueve el producto del array del carrito*/
    const removeProduct = (id) => {
        setCartProducts(cartProducts.filter(product => product.id !== id))
    }

    /*Esta función elimina todos los productos del carrito seteando el estado
    cartProductos como un array vacío*/
    const clearCart = () => {
        setCartProducts([]);
    }

    /*Esta función valida que el id del elemento se encuentre en el array del
    estado CartProducts*/
    const isInCart = (id) => {
        return cartProducts.some( prod => prod.id === id);
    }

    /*Esta función calcula el precio total del carrito*/
    const totalPrice = () => {
        let total = 0;

        cartProducts.map( (product) => {
            total += (product.price * product.quantity)
        })

        return total;
    }

    return(
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}

export { CartProvider };
export default CartContext;