import mockProducts from "../../mockProducts";
import { useState, useEffect } from "react";
import Item from "../Item/Item";
import './ItemList.css';

const ItemList = () => {
    //Seteamos products como array vacío
    const [products, setProducts] = useState([]);

    //Emulamos la consulta de los productos con una demora de 2 segundos como respuesta a la promesa
    const getProducts = new Promise( (resolve, reject) => {
        setTimeout( () => {
            resolve(mockProducts);
        }, 2000);
    });

    //
    useEffect( () => {
        getProducts.then(data => {
            setProducts(data);
        })
    },[])

    return (
        <div className="product-list-container">
            {
                //Utilizamos el operador ternario para emitir un mensaje si no hay elementos
                products.length ? (
                    products.map((product) => {
                        const {id, name, category, presentation, price, stock, description} = product;
                        return (
                            <Item
                                key={id}
                                name={name} 
                                category={category} 
                                presentation={presentation} 
                                price={price}
                                stock={stock} />
                        )
                    })
                ) : (
                    <p>Cargando productos</p>
                )

            }
        </div>
    );
}

export default ItemList;