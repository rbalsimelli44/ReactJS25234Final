import React from 'react'
import { NavLink, Link } from 'react-router-dom';
import Icon from '/src/assets/icons/Icon.jsx';

import '../../styles/navbar.css';

export default function Navbar({ setNavAbierto }) {
  
  return (
    <>
    <nav>
      <div ClassName="usuario-icono">
        <br />
        <br />
        <Icon name="user" color="black" size="sm" />
        <br />
        <span> Usuario </span>
      </div>

      <div ClassName="navegacion-enlaces">
        <ul>
            <li><NavLink to="/" 
                  className={({ isActive }) => (isActive ? "active-link" : "")} 
                  onClick={() => setNavAbierto(false)}>Ofertas</NavLink></li>
            <li><NavLink to="/servicios" 
                  className={({ isActive }) => (isActive ? "active-link" : "")} 
                  onClick={() => setNavAbierto(false)}>Servicios</NavLink></li>
            <li><NavLink to="/productos" 
                  className={({ isActive }) => (isActive ? "active-link" : "")} 
                  onClick={() => setNavAbierto(false)}>Productos</NavLink></li>
            <li><NavLink to="/nosotros" 
                  className={({ isActive }) => (isActive ? "active-link" : "")} 
                  onClick={() => setNavAbierto(false)}>Nosotros</NavLink></li>
            <li><NavLink to="/opiniones" 
                  className={({ isActive }) => (isActive ? "active-link" : "")} 
                  onClick={() => setNavAbierto(false)}>Opiniones</NavLink></li>
            <li><NavLink to="/contacto" 
                  className={({ isActive }) => (isActive ? "active-link" : "")} 
                  onClick={() => setNavAbierto(false)}>Contacto</NavLink></li>
        </ul>
      </div>

    </nav>
    </>
  );
};