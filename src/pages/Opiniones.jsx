import React from 'react';

import '../styles/opiniones.css';

export default function Opiniones() {
  return (
    <>
    <section className="contenedor-opiniones fondo">
        <article>
        <h2>Opiniones de nuestros clientes</h2>
        </article>
        
        <article className="grilla-opiniones">
            <div className="opinion">
                <h4>Alejandro Fernández</h4>
                <p>Está bueno, che!!!</p>
            </div>
            <div className="opinion">
                <h4>María Luján</h4>
                <p>Muy buena mercadería, atención y precios amigos!! Recomiendo 100%</p>
            </div>
            <div className="opinion">
                <h4>Fabián Sueyro</h4>
                <p>Unos fenomenos en cuarentena y ahora en el local también! Todo super fresco!</p>
            </div>
            <div className="opinion">
                <h4>Elías Cejka</h4>
                <p>Buena Atención. Bastante surtido. Precios massso</p>
            </div>
            <div className="opinion">
                <h4>Valeria Donato</h4>
                <p>La atención es excelente y los productos son muy frescos y ricos!!! Muy recomendable!!!</p>
            </div>
            <div className="opinion">
                <h4>Marius Manhattan</h4>
                <p>Los mejores del mundo mundial. Me sorprendió la venta de yerba orgánica certificada</p>
            </div>
            <div className="opinion">
                <h4>Ivana Arizu</h4>
                <p>Mala atención, la chica de cabello rojo ni responde el saludo y no deja ver ni probar las cosas. Me fuí sin comprar</p>
            </div>
            <div className="opinion">
                <h4>Joaquín Saavedra</h4>
                <p>Muy buen servicio con buenos productos y genial atención!</p>
            </div>
            <div className="opinion">
                <h4>Patricia Fernández</h4>
                <p>Tuve un inconveniente, me rompieron la tarjeta!!!. Por favor, manden a su casa al viejito que anda por ahí.</p>
            </div>
        </article>
    </section>
    </>
  );
};