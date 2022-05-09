import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";

import Inicio from "./components/inicio.js";
import Contacto from "./components/contacto.js";
// import Turnos from "./components/turnos.js";
import NavbarHome from "./layouts/navbar.js";
import IniciarSesion from './components/iniciar-sesion'
import Registrarse from './components/registrarse'
import FooterPrincipal from "./layouts/footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavbarHome />}>
            <Route index element={<Inicio />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/iniciar-sesion" element={<IniciarSesion />} />
            <Route path="/registrarse" element={<Registrarse />} />
            <Route path="*" element={<Navigate replace to="/" />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <FooterPrincipal/>
    </div>
  );
}

export default App;
