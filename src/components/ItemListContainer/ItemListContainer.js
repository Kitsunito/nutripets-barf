import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';


const ItemListcontainer = ({greetings}) => {

    return(
        <div className="item-list-container">
            <h1>{greetings}</h1>
            <ItemList />
        </div>
    );
}

export default ItemListcontainer;