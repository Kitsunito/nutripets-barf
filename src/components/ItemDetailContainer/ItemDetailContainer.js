import mockProducts from "../../mockProducts";
import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {

    const [product, setProduct] = useState({});

    const getItem = new Promise ( (resolve, reject) => {
        setTimeout( () => {
            resolve(mockProducts[0])
        }, 2000)
    })

    useEffect( () => {
        getItem.then( (data) => {
            setProduct(data);
        },[])
    })
    
    const {id, name, category, presentation, price, stock, description, pictureURL} = product;

    return (
        <ItemDetail
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