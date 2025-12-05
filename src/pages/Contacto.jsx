import "@fortawesome/fontawesome-free/css/all.min.css";
import { Formulario } from '../components/utils/Formulario';
import SocialIcons from '../components/utils/SocialIcons';

import '../styles/contacto.css';

export default function Contacto() {
  return (
    <>
    <section className="grilla-contactos fondo">
      <div className="contenedor-formulario">
        <Formulario />
      </div>

      <div className="contenedor-direccion">
        <p>
          CP 1825 - Pacheco 1800 - Villa Urquiza <i className="fa-solid fa-location-dot"></i>
          Ciudad Autónoma de Buenos Aires - Argentina
          <br />
          <i className="fa-solid fa-phone"></i>  (+54 911) 6622-4455
          Lu-Vi de 0900 a 19:00 hs
        </p>
      </div>

      <SocialIcons />

    </section>
    </>
  );
};