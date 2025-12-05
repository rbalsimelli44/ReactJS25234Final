import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Ofertas from '../pages/Ofertas';
import Servicios from '../pages/Servicios';
import Productos from '../pages/Productos';
import Nosotros from '../pages/Nosotros';
import Opiniones from '../pages/Opiniones';
import Contacto from '../pages/Contacto';
import ProductoDetalle from '../pages/DetalleProducto';
import Pagar from "../pages/Pagar";
import RutaProtegida from "../pages/RutaProtegida";
import IniciarSesion from "../pages/IniciarSesion";
import Carrito from "../components/layout/Carrito";
import Dashboard from "../pages/Dashboard";
import FormularioProducto from '../components/utils/FormularioProducto';
import EliminarProducto from '../components/utils/EliminarProducto';

import '../styles/AppRoutes.css';

export default function AppRoutes() {
  return (
    <>
    <main className="sin-fondo">
    <Routes>
        {/* RUTAS PÚBLICAS */}
        <Route path='/' element={<Ofertas />} />
        <Route path='/servicios' element={<Servicios />} />
        <Route path='/productos' element={<Productos />} />
        <Route path='/productos/:id' element={<ProductoDetalle />} />
        <Route path='/productos/:categoria/:id' element={<ProductoDetalle />} />
        <Route path='/nosotros' element={<Nosotros />} />
        <Route path='/opiniones' element={<Opiniones />} />
        <Route path='/contacto' element={<Contacto />} />
        <Route path='/carrito' element={<Carrito />} />
        <Route path="/iniciar-sesion" element={<IniciarSesion />} />
        
        {/* RUTA PROTEGIDA - para Usuarios */}
        <Route path="/pagar" element={<RutaProtegida><Pagar /></RutaProtegida>}/>
    
        {/* RUTA PROTEGIDA - para Administrador */}
        <Route path="/dashboard" element={<RutaProtegida soloAdmin={true}><Dashboard /></RutaProtegida>}/>
    
        {/* Ruta para formulario Agrega/Edita*/}
        <Route
        path="/formulario-producto"
        element={
            <RutaProtegida>
            <FormularioProducto />
            </RutaProtegida>
        }
        />
    
        {/* Ruta para ELIMINAR producto */}
        <Route
        path="/eliminar-producto"
        element={
            <RutaProtegida>
            <EliminarProducto />
            </RutaProtegida>
        }
        />
    
        {/* Redirección por defecto */}
        <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
    </main>
    </>
  )
};
