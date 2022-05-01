import "./contacto.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

import contactoIg from "./../img/contacto-ig.jpg";
import contactoWsp from "./../img/contacto-wsp.jpg";
import contactoFijo from "./../img/contacto-fijo.jpg";
import { Link } from "react-router-dom";

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
        <div className="row m-2 cards-container">
          <div className="col card-single">
            <div className="card-content">
              <h2>Contacto vía Llamada</h2>
              <img src={contactoFijo} className="img-contacto" />
              <button
                as={Link}
                to="tel:+5493814219327"
                className="btn btn-primary block"
                title={iconPhone}
              >
                Llamar
              </button>
            </div>
          </div>
          <div className="col card-single">
            <div className="card-content">
              <h2>Contacto vía Whatsapp</h2>
              <img src={contactoWsp} className="img-contacto" />
              <button
                as={Link}
                to="tel:+5493814219327"
                className="btn btn-success block"
                title={iconPhone}
              >
                Whatsapp
              </button>
            </div>
          </div>
          <div className="col card-single">
            <div className="card-content">
              <h2>Contacto vía Instagram</h2>
              <img src={contactoIg} className="img-contacto" />
              <button
                as={Link}
                to="tel:+5493814219327"
                className="btn block back-ig"
                title={iconPhone}
              >
                Instagram
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contacto;
