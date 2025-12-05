import React from 'react';

import '../styles/servicios.css';

export default function Servicios() {
  return (
    <>
    <section className="grilla-servicios fondo">
        <h1>Servicios que ofrecemos</h1>
        <hr />
        <ol>
            <li><strong>Aplicación ecommerce</strong></li>
            <br />
            <li><strong>Publicación en redes</strong></li>
            <br />
            <li><strong>Servicio de pago seguro</strong></li>
            <br />
            <li><strong>Entrega en todo el país</strong></li>
            <br />
            <li><strong>Seguimento de envíos</strong></li>
            <br />
            <li><strong>Arrepentimiento de compra</strong></li>
            <br />
            <li><strong>Garantía de reembolso</strong></li>
            <br />
            <li><strong>Atención al cliente H24x7</strong></li>
        </ol>
    </section>
    </>
  );
};