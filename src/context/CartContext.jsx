import { useState, useEffect } from "react";
import { CartContext } from "./DefContext";

// Proveedor del contexto
export function CartProvider({ children }) {
  
  // Estado del carrito con persistencia en localStorage
  const [carrito, setCarrito] = useState(() => {
    const stored = localStorage.getItem("carrito");
    return stored ? JSON.parse(stored) : [];
  });
  // Escribir en localStorage cuando el carrito cambie
  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }, [carrito]);

  // Funciones para el carrito
  const agregarAlCarrito = (producto) => {
    setCarrito(prevCarrito => {
      const productoExistente = prevCarrito.find(item => item.id === producto.id);
      if (productoExistente) {
        return prevCarrito.map(item =>
          item.id === producto.id
            ? { ...item, cantidad: (item.cantidad || 1) + 1 }
            : item
        );
      } else {
        return [...prevCarrito, { ...producto, cantidad: 1 }];
      }
    });
    alert(`Producto ${producto.nombre} agregado.`);
  };

  const eliminarDelCarrito = (productoId) => {
    setCarrito(carrito.filter(item => item.id !== productoId));
  };

  const vaciarCarrito = () => {
    setCarrito([]);
  };

  const sumarCantidad = (idProducto) => {
    const carritoSumado = carrito.map(producto => {
      if (producto.id === idProducto) {
        return {
          ...producto,
          cantidad: (producto.cantidad || 1) + 1
        };
      }
      return producto;
    });
    setCarrito(carritoSumado);
  };

  const restarCantidad = (idProducto) => {
    const carritoRestado = carrito.map(producto => {
      if (producto.id === idProducto) {
        const cantidadActual = producto.cantidad || 1;
        if (cantidadActual === 1) {
          return null;
        }
        return { ...producto, cantidad: cantidadActual - 1 };
      }
      return producto;
    }).filter(producto => producto !== null);
    setCarrito(carritoRestado);
  };

  const total = carrito.reduce((sum, item) => {
    const cantidad = item.cantidad || 1;
    return sum + (Number(item.precio) * cantidad);
  }, 0);
 
  // Valor que se provee a todos los componentes
  const value = {  
    carrito,
    agregarAlCarrito,
    eliminarDelCarrito,
    vaciarCarrito,
    sumarCantidad,
    restarCantidad,
    total
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};