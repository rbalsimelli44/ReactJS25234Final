import { useCartContext } from "../hooks/useCartContext";
import { formatPrice } from "../components/utils/formatPrice";
import { Link, useParams, useLocation } from "react-router-dom";

import '../styles/detalleProducto.css';

export default function ProductoDetalle() {
    const { agregarAlCarrito } = useCartContext();
    const { id } = useParams();
    const location = useLocation();
    const producto = location.state?.producto;
 
if (!producto) {
    return (
      <div>
        <p>No se pudo cargar el producto</p>
        <Link to="/carrito">
          <button>Volver a Productos</button>
        </Link>
      </div>
    );
  }
 
//  console.log("ProductoDetalle: prop agregarAlCarrito =", agregarAlCarrito);
  return(
    <>
    <div className="detalle-container">
      <div className="detalle-card">

        <div className="detalle-imagen">
          <img src={producto.imagen} alt={producto.nombre} />
        </div>

        <div className="detalle-info">
          <h2>#{ id } - { producto.nombre }</h2>
          <h3>{producto.marca}</h3>

          <p className="detalle-desc">{producto.descripcion}</p>

          <ul>
            <li><strong>Material:</strong> {producto.material}</li>
            <li><strong>Categoría:</strong> {producto.categoria}</li>
          </ul>

          <div className="detalle-precio">
            {formatPrice(producto.precio)}
          </div>

          <div className="acciones">
            <button onClick={() => agregarAlCarrito(producto)}>Comprar</button>
            <Link to={`/productos`}><button>Volver</button></Link>
          </div>
        </div>

      </div>
    </div>
    </>
  );
}; 