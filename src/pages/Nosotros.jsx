import '../styles/nosotros.css';

export default function Nosotros() {
  return (
    <>
    <section className="contenedor-nosotros fondo">
      <h2>Apoyamos las Economías Regionales</h2>
      
      <div className="anhelo">
        <p>nuestra visión</p>
        <video controls src="/videos/Visita_Comunidad_Guarani.mp4" width="80%"></video>
        <p>Comunidad Guaraní Yacutinga - Misiones, Argentina</p>
      </div>

      <article className="nosotros">
        <span> 
          <strong>
          Desde hace 10 años ofrecemos espacios genuinos de participación para el desarrollo sustentable 
          de las economías regionales en todo el país.
          </strong>
        </span>
      </article>
    </section>
    </>
  );
};