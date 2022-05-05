import "./navbar.css";
import {
  Navbar,
  Nav,
  Container,
  NavDropdown,
  DropdownButton,
} from "react-bootstrap";
import { Outlet, Link } from "react-router-dom";
import logo from "./../img/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
const titleNavbar = (
  <span className="circle-icon">
    <FontAwesomeIcon icon={faUser} />
  </span>
);

//stlyles
<style type="text/css">
  {`
  .btn-black {
  background-color: black;
  color: white;
  }
`}
</style>;

const NavbarPrincipal = () => {
  return (
    <>
      <Navbar className="navBG" variant="dark" expand="xl">
        <Container fluid>
          <Navbar.Brand as={Link} to="/">
            <img src={logo} height="40" className="d-inline-block align-top logo-navbar" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">
                Inicio
              </Nav.Link>
              <Nav.Link as={Link} to="/contacto">
                Contacto
              </Nav.Link>
              <Nav.Link as={Link} to="/sabias-que">
                ¿Sabías que?
              </Nav.Link>
              <Nav.Link as={Link} to="/turnos">
                Turnos
              </Nav.Link>
            </Nav>
            <Nav>
              <DropdownButton
                variant="black"
                className="titleNavbar"
                title={titleNavbar}
              >
                <NavDropdown.Item as={Link} to="/iniciar-sesion">
                  Iniciar sesion
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/Registrarse">
                  Registrarse
                </NavDropdown.Item>
              </DropdownButton>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <section>
        <Outlet></Outlet>
      </section>
    </>
  );
};

export default NavbarPrincipal;
