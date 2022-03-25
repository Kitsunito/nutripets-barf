import './ItemListContainer.css';
import Card from '../Card/Card'


const ItemListcontainer = ({greetings}) => {

    const product = {name: 'Alimento Premium', category: 'Gatos', price: 6300, presentation: 'pack 500g', stock: 10}

    return(
        <div className="item-list-container">
            <p>{greetings}</p>
            <Card name={product.name} category={product.category} price={product.price} presentation={product.presentation} stock={product.stock} />
        </div>
    );
}

export default ItemListcontainer;