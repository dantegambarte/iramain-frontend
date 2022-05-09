import { Form, Button } from "react-bootstrap";
import "./iniciar-sesion.css";

const IniciarSesion = () => {
  return (
    <>
      <Form className="mt-3 space-blank">
        <div className=" form-primary">
          <h3>Iniciar sesion</h3>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Correo electronico</Form.Label>
            <Form.Control type="email" placeholder="correo@example.com" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </div>
      </Form>
    </>
  );
};

export default IniciarSesion;
