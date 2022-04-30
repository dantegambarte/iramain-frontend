import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";

import Inicio from "./components/inicio.js";
import Contacto from "./components/contacto.js";
import Turnos from "./components/turnos.js";
import SabiasQue from "./components/sabias-que.js";
import NavbarHome from "./layouts/navbar.js";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavbarHome />}>
            <Route path="/inicio" element={<Inicio />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/sabias-que" element={<SabiasQue />} />
            <Route path="/turnos" element={<Turnos />} />
            <Route path="*" element={<Navigate replace to="/" />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
