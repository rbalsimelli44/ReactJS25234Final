import { useState } from 'react';

import '../../styles/formulario.css';

export function Formulario() {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [opinion, setOpinion] = useState('');

  const manejarEnvio = (evento) => {
    evento.preventDefault();
    setNombre('');
    setCorreo('');
    setOpinion('');
  };

  return(
    <>
    <div className="formulario-contacto">
      <h5> Formulario de Contacto </h5>
      <form onSubmit={manejarEnvio}>
        <div className="mb-3">
          <label htmlFor="nombre"> Nombre:  </label>
          <input 
            type="text"
            value={nombre}
            onChange={(evento) => setNombre(evento.target.value)}
            placeholder="Ingresa el nombre" 
          />
        </div>

        <div className="mb-3">
          <label htmlFor=""> Correo: </label>
          <input 
            type="email"
            value={correo}
            onChange={(evento) => setCorreo(evento.target.value)}
            placeholder="Ingresa el correo" 
          />
        </div>

        <div className="mb-3">
          <textarea
            id="opinion"
            className="form-control"
            rows="5"
            value={opinion}
            onChange={(e) => setOpinion(e.target.value)}
            placeholder="Escribe tu opinión o comentario aquí"
          ></textarea>
        </div>

        <hr />
        <button type="submit">Enviar</button>
      </form>
    </div>
    </>
  );
};
