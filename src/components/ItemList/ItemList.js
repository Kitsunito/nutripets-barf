import { useState, useEffect } from "react";
import Item from "../Item/Item";
import './ItemList.css';
import db from '../../firebase';
import { collection, getDocs, query, where} from 'firebase/firestore';
import { useParams } from 'react-router-dom';
import LinearIndeterminate from '../LinearIndeterminate/LinearIndeterminate';

const ItemList = () => {

    //Seteamos products como array vacío
    const [products, setProducts] = useState([]);

    //Seteamos el state de Loading como true
    const [loading, setLoading] = useState(true);

    //Obtenemos el dato de category desde useParams()
    const { category } = useParams();

    //Obtenemos el listado de productos de la conexión con firebase
    const getProducts = async () => {
        const itemsCollections = category ? 
        (query(collection(db, 'productos'), where("categoryId", "==", category))
        ) : collection(db, 'productos');
        const productsSnapshot = await getDocs(itemsCollections);

        const productList = productsSnapshot.docs.map((doc) => {
            let product = doc.data();
            product.id = doc.id;
            return product;
        });
        return productList;
    }

    useEffect( () => {
        setProducts([]);
        setLoading(true);
        getProducts().then((productos) => {
            setLoading(false);
            setProducts(productos);
        })
    },[category]);

    return (
        <div className="product-list" key="1">
            {
                //Utilizamos el operador ternario para emitir un mensaje si no hay elementos
                products.length ? (
                    products.map((product) => {                     
                        return (
                            <Item
                                key={product.id}
                                product={product} />
                        )
                    })
                ) : (<LinearIndeterminate />)
            }
        </div>
    );
}

export default ItemList;