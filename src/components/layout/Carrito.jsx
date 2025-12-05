import React from 'react';
import { useCartContext } from "../../hooks/useCartContext";
import { formatPrice } from "../utils/formatPrice";
import { useNavigate } from "react-router-dom";
import { FaTrash } from "react-icons/fa";

import '../../styles/carrito.css';

export default function Carrito({ setCarritoAbierto }) {

  const {
    carrito,
    eliminarDelCarrito,
    vaciarCarrito,
    sumarCantidad,
    restarCantidad,
    total
  } = useCartContext();

  const navigate = useNavigate();

  const irAPagar = () => {
    navigate("/pagar", { state: { carrito } });
  };

  if (carrito.length === 0) {
    return (
      <div className="carrito-vacio">
        <strong>Carrito vacío</strong>
      </div>
    );
  }

  return (
    <div className="carrito-container">
      <ul className="carrito-lista">
        {carrito.map((item) => (
          <li key={item.id} className="carrito-item">
            <img src={item.imagen} alt={item.nombre} />

            <div className="info">
              <h3>{item.nombre}</h3>
              <p>{item.marca}</p>
              <p>Precio unitario: {formatPrice(item.precio)}</p>
              <p>Subtotal: {formatPrice(item.precio * item.cantidad)}</p>

              <div className="cantidad">
                <button onClick={() => sumarCantidad(item.id)}>+</button>
                <span>{item.cantidad}</span>
                <button
                  onClick={() => item.cantidad > 1 
                    ? restarCantidad(item.id)
                    : eliminarDelCarrito(item.id)}>-</button>
              </div>

              <button
                className="eliminar"
                onClick={() => eliminarDelCarrito(item.id)}><FaTrash /></button>
            </div>
          </li>
        ))}
      </ul>

      <div className="carrito-total">
        <h3>Total Compra: {formatPrice(total)} </h3>
        <div>
          <button onClick={vaciarCarrito}>Vaciar</button>
          <button onClick={() => { irAPagar(); setCarritoAbierto(false); }}>Pagar</button>
        </div>
      </div>
    </div>
  );
};