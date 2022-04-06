import './ItemListContainer.css';
import mockCategories from "../../mockCategories";
import ItemList from '../ItemList/ItemList';
import { useState, useEffect } from "react";
import {useParams} from "react-router-dom";

const ItemListcontainer = ({greetings}) => {
    const { id }  = useParams();
    
    console.log(id);

    const [category, setCategory] = useState("");

    useEffect( () => {
        filterCategoryById(mockCategories, id);
    },[id])

    const filterCategoryById = (array, id) => {
        return array.map((category) => {
            if (category.id === parseInt(id))
                return setCategory(category.title);
        })
    }

    return(
        <div className="item-list-container">
            <h1>{greetings}</h1>
            <ItemList category={category}/>
        </div>
    );
}

export default ItemListcontainer;