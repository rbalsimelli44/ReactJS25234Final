import React, { useState } from 'react';
import { useCartContext } from '../../hooks/useCartContext';
import Carrito from './Carrito';
import Navbar from './Navbar';

import reactLogo from '/src/assets/logos/react.svg';
import viteLogo from '/src/assets/logos/vite.svg';
import bootstrapLogo from '/src/assets/logos/bootstrap.svg';
import Icon from '/src/assets/icons/Icon.jsx';

import '../../styles/header.css';

export default function Header({ carritoAbierto, setCarritoAbierto }) {
    const [navAbierto, setNavAbierto] = useState(false);

    const { carrito } = useCartContext();
    const totalItems = carrito.reduce((acc, item) => acc + item.cantidad, 0);

    return (
        <header> 
            <>
            <div className="navegacion izquierda" >
                    <button onClick={() => setNavAbierto(true)}>☰</button>
            </div>

            <div className="logo-marca centro">
                <h1>MERCADITO</h1>
                <h6> Front-End con React JS
                    <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                    </a>, Vite
                    <a href="https://vite.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                    </a> y Bootstrap
                    <a href="https://bootstrap.dev" target="_blank">
                            <img src={bootstrapLogo} className="logo" alt="Bootstrap logo" />
                    </a>
                </h6>
            </div>

            <div className="carrito derecha">
                <button
                    className={` ${totalItems > 0 ? "activo" : ""}`}  
                    onClick={() => setCarritoAbierto(true)}>
                    <span className="carrito-contador">{totalItems}</span>
                    <span className="carrito-icono">🛒</span> 
                </button>
            </div>

            {/* Modal de navegación */}
            <aside className={`modal-lateral modal-nav ${navAbierto ? 'modal-activo' : ''}`}>
                <Navbar />
                <span className="close-icon" onClick={() => setNavAbierto(false)}><Icon name="close" /></span>
            </aside>

            {/* Modal de carrito */}
            <aside className={`modal-lateral modal-cart ${carritoAbierto ? 'modal-activo' : ''}`}>
                <Carrito setCarritoAbierto={setCarritoAbierto} />
                <span className="close-icon" onClick={() => setCarritoAbierto(false)}><Icon name="close" /></span>
            </aside>
            
            {/* Fondo de opacidad */}
            {(navAbierto || carritoAbierto) && (
                <div
                    className={`backdrop ${navAbierto || carritoAbierto ? 'backdrop-activo' : ''}`}
                    onClick={() => {
                    setNavAbierto(false);
                    setCarritoAbierto(false);
                    }}
                />
            )}
            </>
        </header> 
    ); 
};