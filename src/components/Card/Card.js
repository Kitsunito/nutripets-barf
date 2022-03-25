import CardMUI from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import ItemCount from '../ItemCount/ItemCount';
import './Card.css';
import Button from '@mui/material/Button';

const Card = ({name, category, presentation, price, stock}) => {

    return (
        <CardMUI className="product-card">
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {category}
                </Typography>
                <Typography className="text-center"  variant="h5" component="div">
                    {name}
                </Typography>
                <Typography className="text-center" sx={{ fontSize: 13 }} color="text.secondary" gutterBottom>
                    Presentación: {presentation}
                </Typography>
                <Typography variant="h6" className="text-center">$ {price}</Typography>
                <ItemCount stock={stock}/>
                <Button variant="outlined" className="text-center">Agregar al carrito</Button>
            </CardContent>
        </CardMUI>
    )
}

export default Card;