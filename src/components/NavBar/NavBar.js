import * as React from 'react';
import Button from '@mui/material/Button';
import './NavBar.css';
import ColorBadge from '../ShoppingCartIcon/ShoppingCartIcon';

export default function SimpleContainer() {
    return (
        <header className="main-header">
            <div className="nav-img">
                <img src="logo.png" alt="logo" className="img-header"></img>
            </div>
            <nav>
                <ul className="navMenu">
                    <li><Button size="large" color="primary">Gatos</Button></li>
                    <li><Button size="large" color="info">Perros</Button></li>
                    <li><Button size="large" color="info">Cachorros</Button></li>
                    <li><Button size="large" color="info">Otros</Button></li>
                </ul>
                <div className="area-profile">
                    <div className="profile-section">
                        <ColorBadge />
                    </div>
                </div>
            </nav>
        </header>
    );
}