import { Routes, Route } from "react-router-dom";
import Home from "./paginas/Home.jsx";
import Servicios from "./paginas/Servicios.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/servicios" element={<Servicios />} />
      </Routes>
    </>
  );
}

export default App;
