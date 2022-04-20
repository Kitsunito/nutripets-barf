import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';
import { useState, useEffect } from "react";
import {useParams} from "react-router-dom";

const ItemListcontainer = ({greetings}) => {
    const { id }  = useParams();

    const [category, setCategory] = useState("");

    useEffect( () => {
        setCategory(id);
    },[id])

    return(
        <div className="item-list-container">
            <h1>{greetings}</h1>
            <ItemList category={category}/>
        </div>
    );
}

export default ItemListcontainer;