import React from 'react'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./css/Footer.css";

const Footer = () => {
    return (
        <footer id="contacto" className="footer">
            <Container>
                <Row className="justify-content-center">
                    <Col lg={8}>
                        <h2 className="footer-title">Información</h2>

                        <div className="footer-block">
                            <h5 className="footer-subtitle">Teléfono</h5>
                            <p className="footer-text">
                                <a href="tel:+11234567890" className="footer-link">(123) 456-7890</a>
                            </p>
                        </div>

                        <div className="footer-block">
                            <h5 className="footer-subtitle">Email</h5>
                            <p className="footer-text">
                                <a href="mailto:asesoramientolegal@draltamirano.com" className="footer-link">
                                    asesoramientolegal@draltamirano.com
                                </a>
                            </p>
                        </div>

                        <div className="footer-block">
                            <h5 className="footer-subtitle">Dirección</h5>
                            <address className="footer-text mb-0">
                                Av. Los Incas 3520<br />
                                X5000 Córdoba, Argentina
                            </address>
                        </div>

                        <div className="footer-block">
                            <h5 className="footer-subtitle">Social</h5>
                            <ul className="footer-social">
                                <li><a aria-label="Facebook" href="#" className="bi bi-facebook" /></li>
                                <li><a aria-label="X/Twitter" href="#" className="bi bi-twitter-x" /></li>
                                <li><a aria-label="WhatsApp" href="#" className="bi bi-whatsapp" /></li>
                                <li><a aria-label="Instagram" href="#" className="bi bi-instagram" /></li>
                            </ul>
                        </div>

                        <div className="footer-note">
                            © {new Date().getFullYear()} Dra. Alejandra Altamirano — Todos los derechos reservados.
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}


export default Footer;