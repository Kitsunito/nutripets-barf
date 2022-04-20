import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link} from 'react-router-dom';
import { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import db from "../../firebase";


export default function BasicMenu({children}) {
    const [anchorEl, setAnchorEl] = useState(null);
    const [categories, setCategories] = useState([]);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const getCategories = async() => {
        const itemsCollections = collection(db, "categorias");
        const categoriesSnapshot = await getDocs(itemsCollections);

        const categories = categoriesSnapshot.docs.map((doc) => {
            let category = doc.data();
            category.id = doc.id;
            return category;
        })

        return categories;
    }

    useEffect( () => {
        setCategories([]);
        getCategories().then((categories) => {
            setCategories(categories);
        })
    },[]) 

    return (
    <div>
        <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        >
        {children}
        </Button>
        <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
                'aria-labelledby': 'basic-button',
            }}
            >
            {
                categories.map((category) => {
                    return <MenuItem onClick={handleClose} key={category.id}>
                        <Link to={`/category/${category.id}`}>{`${category.title}`}</Link>
                    </MenuItem>
                })
            }
        </Menu>
    </div>
    );
}