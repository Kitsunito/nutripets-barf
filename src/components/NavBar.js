import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function SimpleContainer() {
    return (
        <header className="main-header">
            <div className="nav-img">
                <img src="logo.png" alt="logo" className="img-header"></img>
            </div>
            <nav>
                <ul className="navMenu">
                    <li><Button>Inicio</Button></li>
                    <li><Button>Productos</Button></li>
                    <li><Button>Contacto</Button></li>
                    <li><Button>La Empresa</Button></li>
                </ul>
            </nav>
        </header>
    );
}