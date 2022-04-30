import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
var currentTime = new Date();
var year = currentTime.getFullYear();

const FooterPrincipal = () => {
  return (
    <footer className="page-footer font-small blue pt-4">
      <Navbar
        className="footer-copyright py-3"
        bg="dark"
        variant="dark"
      >
        <Container className="text-white d-flex justify-content-center">
          © {year} Desarrollado por CiatWare
        </Container>
      </Navbar>
    </footer>
  );
};

export default FooterPrincipal;
