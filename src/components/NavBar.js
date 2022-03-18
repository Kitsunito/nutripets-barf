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
                    <li><Button>Gatos</Button></li>
                    <li><Button>Perros</Button></li>
                    <li><Button>Cachorros</Button></li>
                    <li><Button>Otros</Button></li>
                </ul>
            </nav>
        </header>
    );
}