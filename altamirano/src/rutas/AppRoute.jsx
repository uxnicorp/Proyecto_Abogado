import { Routes, Route} from "react-router-dom";
import Footer from "../componentes-generales/Footer.jsx";
import Home from "../paginas/Home.jsx";
import NavbarDr from "../componentes-generales/Navbar.jsx";
import Servicios from "../paginas/Servicios.jsx";
import Formulario from "../componentes-generales/Formulario.jsx";

export const AppRoute = () => {
    return (
        <div>   
            <NavbarDr />
            <Routes>
                <Route path="/*" element={<Home />} />
                <Route path="/servicios" element={<Servicios />} />
                <Route path="/formulario" element={<Formulario />} />
            </Routes>
            <Footer />
        </div>
    )
}
