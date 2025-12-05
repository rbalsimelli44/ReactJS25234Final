import { useState, useEffect } from "react";
import { formatPrice } from "../components/utils/formatPrice";
import { Link, useNavigate } from "react-router-dom";

import { useCartContext } from "../hooks/useCartContext"
import { useAuthContext } from "../hooks/useAuthContext";

import '../styles/productos.css';

export default function Productos() {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Contexto 
  const { agregarAlCarrito } = useCartContext();
  const { usuario } = useAuthContext();

  const esAdmin = usuario?.nombre === "admin";


  useEffect(() => {
    fetch("https://68eaf3c776b3362414cc8783.mockapi.io/api/v1/productos")
      .then((respuesta) => respuesta.json())
      .then((datos) => {
        setProductos(datos);
        setCargando(false);
      })
      .catch((error) => {
        {console.error("Error!,", error)}
        setError("Hubo un problema al cargar los productos.");
        setCargando(false);
      });
  }, []);

  if (cargando) return <p>Cargando productos...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
    <h2 className="titulo-productos">Lista de productos disponibles</h2>
        <ol className="contenedor-productos">
          {productos.map(producto => (
                <li key={producto.id} className="tarjeta-producto">
                <img    src={producto.imagen} 
                        alt={producto.nombre} 
                        width="150" height="150" 
                />
                  <strong>  {producto.nombre} </strong>
                  <strong>  {producto.marca} </strong>
                  <br />
                  <span>   {formatPrice(producto.precio)}</span>
                  <div className="acciones">
                    <Link to={`/productos/${producto.id}`} state={{producto}}><button>Detalles</button></Link>
                    <Link to={`/productos/${producto.categoria}/${producto.id}`} state={{producto}}><button>Categoria</button></Link>
                    <button onClick={() => agregarAlCarrito(producto)}>Comprar</button>
                  </div>

                  {/* Botón Editar - SOLO visible para admin */}
                  {esAdmin && (
                    <div>
                      <hr/>
                      <button
                        onClick={() =>
                          navigate("/editar-productos", {
                            state: { producto: producto },
                          })
                        }
                        style={{
                          backgroundColor: "#28a745",
                          color: "white",
                          marginRight: "10px",
                        }}
                      >
                        Editar
                      </button>

                      <button
                        onClick={() =>
                          navigate("/eliminar-productos", {
                            state: { producto: producto },
                          })
                        }
                        style={{
                          backgroundColor: "#dc3545",
                          color: "white",
                          marginRight: "10px",
                        }}
                      >
                        Eliminar
                      </button>

                      </div>
                  )}

                </li>
          ))}
        </ol>
    </>
  );
};