import CardMUI from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import './Item.css';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";

const Item = ({product}) => {
    
    const {category, name, presentation, price, stock, id} = product;

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
                <Typography className="text-center" sx={{ fontSize: 13 }} color="text.secondary" gutterBottom>
                    Stock Disponible: {stock}</Typography>
                <Button variant="outlined" className="text-center product-button">
                    <Link to={`../item/${id}`}>Ver producto</Link>
                </Button>
            </CardContent>
        </CardMUI>
    )
}

export default Item;