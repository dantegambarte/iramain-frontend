import "./contacto.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

import contactoIg from "./../img/contacto-ig.jpg";
import contactoWsp from "./../img/contacto-wsp.jpg";
import contactoFijo from "./../img/contacto-fijo.jpg";
import { Link } from "react-router-dom";
import iconWsp from "./../icon/whatsapp-brands.svg";
import iconIg from "./../icon/instagram-brands.svg";

const iconPhone = (
  <span>
    <FontAwesomeIcon icon={faPhone} className="me-2" />
  </span>
);

const iconWhatsApp = (
  <img src={iconWsp} className="icon-color-invert me-2" width="16"></img>
);

const iconInstagram = (
  <img src={iconIg} className="icon-color-invert me-2" width="16"></img>
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
              <a
                className="btn btn-primary btn-block"
                href="tel:+5493814219327"
              >
                <div className="alig-icon-text">{iconPhone} Llamar</div>
              </a>
            </div>
          </div>
          <div className="col card-single">
            <div className="card-content">
              <h2>Contacto vía Whatsapp</h2>
              <img src={contactoWsp} className="img-contacto" />
              <a
                className="btn btn-success btn-block"
                href="https://wa.me/+5493813512978"
              >
                <div className="alig-icon-text">{iconWhatsApp}Whatsapp</div>
              </a>
            </div>
          </div>
          <div className="col card-single">
            <div className="card-content">
              <h2>Contacto vía Instagram</h2>
              <img src={contactoIg} className="img-contacto" />
              <a className="btn back-ig btn-block" href="https://www.instagram.com/oftalmologia.iramain/">
                <div className="alig-icon-text">{iconInstagram}Instagram</div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contacto;
