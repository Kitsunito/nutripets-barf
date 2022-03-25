import {useState} from 'react';
import Button from '@mui/material/Button';
import './ItemCount.css';
import Typography from '@mui/material/Typography';

const ItemCount = ({stock}) => {

    const [count, setCount] = useState(1);

    const removeItem = () => {
        if (count > 1)
            setCount(count - 1);
    }

    const addItem = () => {
        if (count < stock)
            setCount(count + 1);
    }

    return (
            <div className="item-count">
                <Button onClick={removeItem}>-</Button>    
                <Typography className="display-count" variant="button">{count}</Typography >
                <Button onClick={addItem}>+</Button>
            </div>
    )
}

export default ItemCount;