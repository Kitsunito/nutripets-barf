import Badge from '@mui/material/Badge';
import Stack from '@mui/material/Stack';
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';

const ColorBadge = () => {
    return (
        <Stack spacing={2} direction="row">
            <Badge badgeContent={3} color="primary">
                <ShoppingCartTwoToneIcon color="action" fontSize="large"/>
            </Badge>
        </Stack>
    )
}

export default ColorBadge;
