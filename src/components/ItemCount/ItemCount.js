//Hooks 
import {useState} from 'react';

//Components
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

//Style
import './ItemCount.css';

const ItemCount = ({stock,action}) => {

    //-----States-----
    const [count, setCount] = useState(1);

    //-----Functions-----
    //Esta función permite restar una unidad del estado count
    const removeItem = () => {
        setCount(count - 1);
    }

    //Esta función permite incrementar una unidad al estado count
    const addItem = () => {
        setCount(count + 1);
    }

    return (
            <>
                <div className="item-count">
                    {/*Agregamos al evento click del botón "-" la función removeItem */}
                    <Button onClick={removeItem} disabled={count > 1 ? false : true}>-</Button>
                    
                    <Typography className="display-count" variant="button">{count}</Typography >

                    {/*Agregamos al evento click del botón "-" la función removeItem */}
                    <Button onClick={addItem} disabled={count < stock ? false : true}>+</Button>
                </div>
                <div className="item-count-button">
                    {/*Este botón ejecuta la acción recibida desde el padre en el evento click */}
                    <Button variant="contained" onClick={(e) => action(e, count)}>Agregar al carrito</Button>    
                </div>
            </>
    )
}

export default ItemCount;