import mockProducts from "../../mockProducts";
import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import {useParams} from "react-router-dom";

const ItemDetailContainer = () => {
    const { id }  = useParams();
    const [product, setProduct] = useState({});

    useEffect( () => {
        filterProductById(mockProducts, id);
    },[id])
    
    const filterProductById = (array, id) => {
        return array.map((product) => {
            if (product.id === parseInt(id))
                return setProduct(product);
        })
    }

    const {name, category, presentation, price, stock, description, pictureURL} = product;

    return (
        <ItemDetail
            key = {id}
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