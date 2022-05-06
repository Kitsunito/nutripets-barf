//Hooks 
import { useState, useEffect } from "react";
import {useParams} from "react-router-dom";

//Components
import ItemList from '../../components/ItemList/ItemList';

//Style
import './ItemListContainer.css';



const ItemListcontainer = ({greetings}) => {
    //Almacenamos el id de los parámetros de la URL
    const { id }  = useParams();

    //-----States-----
    const [category, setCategory] = useState("");

    //-----Effects-----
    useEffect( () => {
        setCategory(id);
    },[id])

    return(
        <div className="item-list-container">
            <h1>{greetings}</h1>
            {/*Renderizamos el componente ItemList pasando en las props el id de la categoría
            que establecimos desde los parámetros*/}
            <ItemList category={category}/>
        </div>
    );
}

export default ItemListcontainer;