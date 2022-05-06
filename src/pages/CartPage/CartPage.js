//Hooks 
import { useContext, useState } from 'react';
import { useNavigate } from "react-router-dom";

//Context
import CartContext from '../../context/CartContext';

//Components
import Cart from '../../components/Cart/Cart';
import NoItems from '../../components/EmptyCart/EmptyCart';
import Button from '@mui/material/Button';
import ModalCustom from '../../components/Modal/Modal';
import OrderReceipt from '../../components/OrderReceipt/OrderReceipt';
import db from '../../services/firebase';

//Services
import { collection, addDoc } from 'firebase/firestore';

//Style
import './CartPage.css';

const CartPage = () => {

    let navigate = useNavigate();

    //Invocamos al context CartContext
    const {cartProducts, totalPrice, clearCart} = useContext(CartContext);

    //-----States-----
    //Instanciamos un estado para manejar la apertura y cierre del Modal
    const [openModal, setOpenModal] = useState(false);

    //Instanciamos un estado para manejar los datos del formulario
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: ""
    })

    //Instanciamos un estado para manejar los datos de la orden
    const [order, setOrder] = useState({
        buyer: formData,
        items: cartProducts.map( (product) => {
            return {
                id: product.id,
                title: product.name,
                price: product.price
            }
        }),
        date: new Date(),
        total: totalPrice()
    })

    //Instanciamos un estado para manejar la respuesta a la orden generada
    const [successOrder, setSuccessOrder] = useState();

    //-----Functions-----
    /*Esta función gestiona el contenido de los inputs almacenando los valores en 
    el estado formData*/
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    /*Esta función envía los datos del pedido a Firebase y recibe
    la confirmación de la orden en el estado successOrder*/
    const pushOrder = async(prevOrder) => {
        const orderFirebase = collection(db, 'ordenes');
        const orderDoc = await addDoc(orderFirebase, prevOrder);
        setSuccessOrder(orderDoc.id)
    }

    /*Esta función gestiona el evento de envío del formulario, estableciendo
    los datos en el estado order y envíandolos con la función pushOrder a Firebase*/
    const handleSubmit = (e) => {
        e.preventDefault();
        let prevOrder = {
            ...order,
            date: new Date(),
            buyer: formData
        }
        setOrder(prevOrder);
        pushOrder(prevOrder);
    }

    /*Esta función elimina el contenido del carrito y redirige
    la navegación a la página principal*/
    const endCart = (e) => {
        clearCart();
        navigate("/");
    }

    return (
        <>
            { 
            //Validamos, con el operador ternario, que el carrito tenga elementos
            cartProducts.length  ? (
                <>
                    {/*En caso de existir elementos renderizamos el carrito, un botón
                    para realizar el pedido y un Modal dependiendo de si está desplegado o no.*/}
                    <Cart key="1"/>
                    <div className="cart-footer">
                        <Button variant="contained" onClick={()=> setOpenModal(true)}>Realizar pedido</Button>
                    </div>
                    <ModalCustom className="cart-modal" handleClose={() => setOpenModal(false)} open={openModal}>
                        <h2>Su Compra</h2>
                        { 
                        /*En el Modal validamos si el estado successOrder contiene una orden confirmada*/
                        successOrder ? (
                            <>
                                {/*Si contiene un valor, mostramos el componente OrderReceipt
                                y un bottón para cerrar el Modal*/}
                                <OrderReceipt successOrder={successOrder}/>
                                <Button variant="contained" onClick={endCart}>Cerrar</Button>
                            </>
                        ) :
                        (
                        <>
                            {/*Si no hay un valor, mostramos el formulario para poder
                            registrar los datos del comprador de la orden*/}
                            <h3 className="cart-form-title">Datos del cliente</h3>
                            <form onSubmit={handleSubmit}>
                                <div className="form-component"> 
                                    <input type="text"
                                        name="name" 
                                        placeholder='Nombre' 
                                        onChange={handleChange}
                                        value={formData.name}
                                        id="name"
                                    />
                                </div>
                                <div className="form-component">
                                    <input type="number"
                                        name="phone" 
                                        placeholder='Teléfono' 
                                        onChange={handleChange}
                                        value={formData.phone}
                                        id="phone"
                                    />
                                </div>
                                <div className="form-component">
                                    <input type="mail"
                                        name="email" 
                                        placeholder='Mail' 
                                        onChange={handleChange}
                                        value={formData.email}
                                        id="mail"
                                    />
                                </div>
                                <Button type="submit" variant="contained">Enviar</Button>
                            </form>
                        </>
                        )}
                    </ModalCustom>
                </>)    
                : ( /*En caso de no tener elementos, renderizamos el carrito vacío*/
                    <NoItems />)
                    }
        </>
    );
}

export default CartPage;