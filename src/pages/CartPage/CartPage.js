import { useContext, useState } from 'react';
import Cart from '../../components/Cart/Cart';
import CartContext from '../../context/CartContext';
import NoItems from '../../components/EmptyCart/EmptyCart';
import Button from '@mui/material/Button';
import ModalCustom from '../../components/Modal/Modal';
import db from '../../firebase';
import { collection, addDoc } from 'firebase/firestore';
import { useNavigate } from "react-router-dom";

const CartPage = () => {

    let navigate = useNavigate();

    const {cartProducts, totalPrice, clearCart} = useContext(CartContext);

    const [openModal, setOpenModal] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: ""
    })
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
    const [successOrder, setSuccessOrder] = useState();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const pushOrder = async(prevOrder) => {
        const orderFirebase = collection(db, 'ordenes');
        const orderDoc = await addDoc(orderFirebase, prevOrder);
        setSuccessOrder(orderDoc.id)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let prevOrder = {
            ...order,
            date: new Date(),
            buyer: formData
        }
        setOrder(prevOrder)
        pushOrder(prevOrder);
    }

    const endCart = (e) => {
        clearCart();
        navigate("/");
    }

    return (
        <>
            { cartProducts.length  ? (
                <>
                    <Cart key="1"/>
                    <Button onClick={()=> setOpenModal(true)}>Realizar pedido</Button>

                    <ModalCustom handleClose={() => setOpenModal(false)} open={openModal}>
                        <h2>Su Compra</h2>
                        { successOrder ? (
                            <>
                                <div>
                                    <h3>Orden generada correctamente</h3>
                                    <p>Su código de órden es: {successOrder}</p>
                                </div>
                                <Button onClick={endCart}>Cerrar</Button>
                            </>
                        ) :
                        (
                        <>
                            <h3>Datos del cliente</h3>
                            <form onSubmit={handleSubmit}>
                                <input type="text"
                                    name="name" 
                                    placeholder='Nombre' 
                                    onChange={handleChange}
                                    value={formData.name}
                                />
                                <input type="number"
                                    name="phone" 
                                    placeholder='Teléfono' 
                                    onChange={handleChange}
                                    value={formData.phone}
                                />
                                <input type="mail"
                                    name="email" 
                                    placeholder='Mail' 
                                    onChange={handleChange}
                                    value={formData.email}
                                />

                                <Button type="submit">Enviar</Button>
                            </form>
                        </>
                        )}
                    </ModalCustom>
                </>)    
                : <NoItems /> }
        </>
    );
}

export default CartPage;