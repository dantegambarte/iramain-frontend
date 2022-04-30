import { Figure } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./inicio.css";

import drIramain from "./../img/dr-iramain.jpg";

const Inicio = () => {
  return (
    <>
      <div className="content-img-drIramain">
        <figure className="figure-img-drIramain">
          <img
            src={drIramain}
            width="200"
            height="auto"
            alt="Dr. Jorge Iramain"
            className="rounded-circle"
          />
          <figcaption className="mx-3">
            <h3>Dr. Jorge Iramain: </h3>
            <br />
            <h5>
              Un médico oftalmólogo especializado en Mendoza. Profesional
              capacitado para realizar estudios, diagnósticos, tratamientos y
              microcirugías oftalmológicas de alta complejidad y láser con
              equipamiento avanzado.
            </h5>
          </figcaption>
        </figure>
      </div>
    </>
  );
};

export default Inicio;
