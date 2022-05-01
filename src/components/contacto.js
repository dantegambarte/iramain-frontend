import "./contacto.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

import contactoIg from "./../img/contacto-ig.jpg";
import contactoWsp from "./../img/contacto-wsp.jpg";
import contactoFijo from "./../img/contacto-fijo.jpg";

const iconPhone = (
  <span>
    <FontAwesomeIcon icon={faPhone} />
  </span>
);

const Contacto = () => {
  return (
    <>
      <h1 className="title-contacto">Forma de contactarnos</h1>
      <section className="page-content">
        <hr />
        <div className="row content-cards">
          <div className="card-contact">
            <h2>Contacto vía llamada</h2>
            <img src={contactoFijo} className="img-contacto"></img>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contacto;
