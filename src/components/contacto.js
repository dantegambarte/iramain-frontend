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
              <a
                className="btn back-ig btn-block"
                href="https://www.instagram.com/oftalmologia.iramain/"
              >
                <div className="alig-icon-text">{iconInstagram}Instagram</div>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section>
        <hr />
        <div className="col mt-2">
          <div>
            <div className="text-after-map">
              <h4>Aqui estamos: </h4>
              <p>Santiago del Estero 198 - San Miguel de Tucumán</p>
            </div>
            <div className="map-responsive">
            <iframe className="ubication-in-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.4645615576687!2d-65.20067858442961!3d-26.825172596021027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225c196f3f5f53%3A0x48dce45eccda0a6f!2sSantiago%20del%20Estero%20198%2C%20T4000%20San%20Miguel%20de%20Tucum%C3%A1n%2C%20Tucum%C3%A1n!5e0!3m2!1ses-419!2sar!4v1651790846457!5m2!1ses-419!2sar" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contacto;
