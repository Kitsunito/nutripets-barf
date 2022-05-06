//Hooks 
import { useState, useEffect } from "react";
import { useNavigate, useParams } from 'react-router-dom';

//Components
import LinearIndeterminate from '../../components/LinearIndeterminate/LinearIndeterminate';
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import db from "../../services/firebase";

//Services
import { doc, getDoc } from "firebase/firestore";

const ItemDetailContainer = () => {
    
    const { id }  = useParams();
    const navigate = useNavigate();

    //-----States-----
    const [product, setProduct] = useState({});
    
    //-----Functions-----
    /*Esta función busca un documento en la BD de Firebase de Productos
    según el ID obtenido desde los parámetros*/
    const getProduct = async() => {
        const docRef = doc(db, "productos", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            let product = docSnap.data();
            product.id = docSnap.id;
            setProduct(product);
        } else {
            navigate('/error');
        }
    }

    //----Effects-----
    useEffect(() => {
        getProduct()
    },[id])

    const {name, category, presentation, price, stock, description, image} = product;

    return (
            //Validamos que la key name contenga un valor
            name ? (
                    //En caso positivo, renderizamos el componente ItemDetail obtenido anteriormente
                    <ItemDetail
                        key = {id}
                        id = {id}
                        name={name} 
                        category={category} 
                        presentation={presentation} 
                        price={price}
                        stock={stock}
                        description={description}
                        image={image} />
            ) : (
                //En caso negativo, mostramos el componente LinearIndeterminate
                <LinearIndeterminate />
            )
    )
}

export default ItemDetailContainer;