import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'

const ItemDetail = (product) => {
    const {name, category, presentation, description, price, pictureURL, stock} = product;

    return (
        <div fixed className='item-datail'>
            <div fixed className='item-img'>
                <img src={pictureURL} alt={name}></img>
            </div>
            <div fixed className='item-description'>
                <Typography className="text-center"  variant="h3" component="div">
                    {name}
                </Typography>
                <Typography className="text-center"  variant="h5" component="div">
                    $ {price}
                </Typography>
                <Typography className="text-center"  variant="string" component="div">
                    {description}
                </Typography>
                <ItemCount stock={stock}/>
                <Button variant="contained">Agregar al carrito</Button>
            </div>
        </div>

    );
}

export default ItemDetail;