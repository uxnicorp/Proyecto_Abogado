import { Routes, Route } from "react-router-dom";
import Home from "./paginas/Home.jsx";
import Servicios from "./paginas/Servicios.jsx";
import Formulario from "./componentes-generales/Formulario";

function App() {
  return (
    <>
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/formulario" element={<Formulario />} />
      </Routes>
    </>
  );
}

export default App;
