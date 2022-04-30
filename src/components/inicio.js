import { Card, CardGroup, Figure } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./inicio.css";

import drIramain from "./../img/dr-iramain.jpg";
import cardImg1 from "./../img/card-img-1.jpg";
import cardImg2 from "./../img/card-img-2.jpg";
import cardImg3 from "./../img/card-img-3.jpg";

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

      <CardGroup className="card-group">
        <Card className="card">
          <Card.Img variant="top" src={cardImg1} />
          <Card.Body>
            <Card.Title>Autokeratorefractometro Computarizado</Card.Title>
            <Card.Text>
              Se utiliza para la medición precisa del defecto visual de cada
              paciente.
            </Card.Text>
          </Card.Body>
          {/* <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer> */}
        </Card>
        <Card className="card">
          <Card.Img variant="top" src={cardImg2} />
          <Card.Body>
            <Card.Title>Salud visual</Card.Title>
            <Card.Text>
              El chequeo en consultorio con tu médico oftalmólogo es la única
              manera de prevenir o detectar en una fase temprana cualquier
              enfermedad que pueda comprometer el estado de la visión y la salud
              de tus ojos.
            </Card.Text>
          </Card.Body>
          {/* <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer> */}
        </Card>
        <Card className="card">
          <Card.Img variant="top" src={cardImg3} />
          <Card.Body>
            <Card.Title>Ojo seco</Card.Title>
            <Card.Text>
              El ojo seco será cada vez más frecuente entre la población jóven y
              adultos debido debido al exceso de uso de pantallas de
              visualización (ordenadores, tablets, móvles, etc). <br />
              Algunos de los síntomas son: <br />
              ✔️PESADEZ EN PÁRPADOS <br />
              ✔️ FRECUENCIA DE PARPADEO <br />
              ✔️ SENSACIÓN DE ARENILLA <br />
              ✔️ IRRITACIÓN <br />
              ✔️ LAGRIMEO <br />
              ✔️ OJOS SECOS <br />
              ✔️ ARDOR <br />
              ✔️ SECRECIÓN DE MUCOSA <br />
            </Card.Text>
          </Card.Body>
          {/* <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer> */}
        </Card>
      </CardGroup>
    </>
  );
};

export default Inicio;
