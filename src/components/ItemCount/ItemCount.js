import {useState} from 'react';
import Button from '@mui/material/Button';
import './ItemCount.css';
import Typography from '@mui/material/Typography';

const ItemCount = ({stock}) => {

    const [count, setCount] = useState(1);

    const removeItem = () => {
        setCount(count - 1);
    }

    const addItem = () => {
        setCount(count + 1);
    }

    return (
            <div className="item-count">
                <Button onClick={removeItem} disabled={count > 0 ? false : true}>-</Button>    
                <Typography className="display-count" variant="button">{count}</Typography >
                <Button onClick={addItem} disabled={count < stock ? false : true}>+</Button>
            </div>
    )
}

export default ItemCount;