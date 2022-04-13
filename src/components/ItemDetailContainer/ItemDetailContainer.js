import mockProducts from "../../mockProducts";
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import ItemDetail from "../ItemDetail/ItemDetail";
import {useParams} from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import db from "../../firebase";

const ItemDetailContainer = () => {
    const { id }  = useParams();
    const [product, setProduct] = useState({});
    const navigate = useNavigate();

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

    useEffect( () => {
        getProduct();
    },[id])

    const {name, category, presentation, price, stock, description, pictureURL} = product;

    return (
        <ItemDetail
            key = {id}
            id = {id}
            name={name} 
            category={category} 
            presentation={presentation} 
            price={price}
            stock={stock}
            description={description}
            pictureURL={pictureURL} />
    )
}

export default ItemDetailContainer;