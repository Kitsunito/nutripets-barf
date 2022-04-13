import { useState, useEffect } from "react";
import Item from "../Item/Item";
import './ItemList.css';
import db from '../../firebase'
import { collection, getDocs } from 'firebase/firestore'
import { useParams } from 'react-router-dom'

const ItemList = () => {

    //Seteamos products como array vacío
    const [products, setProducts] = useState([]);

    //Seteamos el state de Loading como true
    const [loading, setLoading] = useState(true);

    //Obtenemos el dato de category desde useParams()
    const { category } = useParams()

    //Obtenemos el listado de productos de la conexión con firebase
    const getProducts = async () => {
    
        const itemsCollections = collection(db, 'productos');
        const productsSnapshot = await getDocs(itemsCollections);

        const productList = productsSnapshot.docs.map((doc) => {
            let product = doc.data();
            product.id = doc.id;
            return product;
        });

        return productList;
    }

    //
    useEffect( () => {
        setProducts([]);
        setLoading(true);
        getProducts().then((productos) => {
            setLoading(false);
            category ? filterProductByCategory(productos, category) : setProducts(productos)
        })
    },[category]);

    const filterProductByCategory = (array, category) => {
        return array.map((product) => {
            if (product.category === category) {
                return setProducts(products => [...products, product]);
            }
        })
    }

    return (
        <div className="product-list-container" key="1">
            {
                //Utilizamos el operador ternario para emitir un mensaje si no hay elementos
                products.length ? (
                    products.map((product) => {                     
                        return (category === "" || category === product.category) ? (
                            <Item
                                key={product.id}
                                product={product} />
                        ) : ""
                    })
                ) : (
                    <p>Cargando productos</p>
                )
            }
        </div>
    );
}

export default ItemList;