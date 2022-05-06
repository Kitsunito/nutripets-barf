//Hooks 
import { useState, useEffect } from 'react';

//Components
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link} from 'react-router-dom';
import db from "../../services/firebase";


//Services
import { collection, getDocs } from 'firebase/firestore';

export default function BasicMenu({children}) {

    const open = Boolean(anchorEl);

    //-----States-----
    const [anchorEl, setAnchorEl] = useState(null);
    const [categories, setCategories] = useState([]);
    
    //-----Functions-----
    //Esta función maneja, el evento que abre el Menú
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    //Esta función maneja el evento de cierre del Menu
    const handleClose = () => {
        setAnchorEl(null);
    };

    //Esta función busca los documentos correspondientes a categorías en Firebase
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

    //-----Effects-----
    /*Este efecto limpia el estado Categories y lo actualiza con los valores
    obtenidos en getCategories() al cargar el componente*/
    useEffect( () => {
        setCategories([]);
        getCategories().then((categories) => {
            setCategories(categories);
        })
    },[]) 

    return (
    <>
        {/*Se renderiza un botón que sirve como disparador del Menu*/}
        <Button
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
        >
            {children}
        </Button>
        {/*En función del contenido del estado anchorEl, se muestra u oculta el Menu*/}
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
                /*Se recorre el array Categories y se crea un elemento del tipo MenuItem que
                contiene un Link con el id de la categoría para aplicar el filtrado de los productos*/
                categories.map((category) => {
                    return <MenuItem onClick={handleClose} key={category.id}>
                        <Link to={`/category/${category.id}`}>{`${category.title}`}</Link>
                    </MenuItem>
                })
            }
        </Menu>
    </>
    );
}