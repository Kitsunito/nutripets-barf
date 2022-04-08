import {useState} from 'react';
import Button from '@mui/material/Button';
import './ItemCount.css';
import Typography from '@mui/material/Typography';

const ItemCount = ({stock,action}) => {

    const [count, setCount] = useState(1);

    const removeItem = () => {
        setCount(count - 1);
    }

    const addItem = () => {
        setCount(count + 1);
    }

    const addToCart = (e) => {
        e.stopPropagation();
        console.log("Agrego al carrito");
    }

    return (
            <>
                <div className="item-count">
                    <Button onClick={removeItem} disabled={count > 0 ? false : true}>-</Button>    
                    <Typography className="display-count" variant="button">{count}</Typography >
                    <Button onClick={addItem} disabled={count < stock ? false : true}>+</Button>
                </div>
                <div className="item-count-button">
                    <Button variant="contained" onClick={(e) => action(e, count)}>Agregar al carrito</Button>    
                </div>
            </>
    )
}

export default ItemCount;