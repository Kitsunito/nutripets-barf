import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import './ItemListContainer.css'

const ItemListcontainer = ({greetings}) => {
    return(
        <div className="item-list-container">
            <p>{greetings}</p>
            <Card className="product-card">
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        Gatos
                    </Typography>
                    <Typography variant="h5" component="div">
                        Alimento Premium
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
}

export default ItemListcontainer;