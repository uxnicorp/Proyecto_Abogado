import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./css/Navbar.css";
import { useNavigate } from "react-router";

const NavbarDr = () => {
    const navigate = useNavigate();

    const handleNavClick = (id) => {
        navigate("/");
        setTimeout(()=>{
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    }, 100);
    }


return (
    <Navbar expand="lg" className="bg-body-tertiary py-1" sticky="top">
        <Container>
            <Navbar.Brand role="button" onClick={() => handleNavClick("home")}><img src="../../public/logo_beige.png" alt="logo" className="image-logo" /></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto nav-links">
                    <Nav.Link onClick={() => handleNavClick("home")}>Home</Nav.Link>
                    <Nav.Link onClick={() => handleNavClick("perfil")}>Perfil profesional</Nav.Link>
                    <Nav.Link href="/servicios">Servicios</Nav.Link>
                    <Nav.Link onClick={()=> handleNavClick("testimonios")}>Testimonios</Nav.Link>
                    <Nav.Link onClick={()=> handleNavClick("faqs")}>Preguntas frecuentes</Nav.Link>
                    <Nav.Link href="#contacto">Contacto</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
)
};
export default NavbarDr;